import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CACHE_FILE = path.join(process.cwd(), '.cache', 'bybit-stats.json');
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24시간 (밀리초)

// 캐시 디렉토리 생성
function ensureCacheDir() {
  const cacheDir = path.dirname(CACHE_FILE);
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true });
  }
}

// 캐시 읽기
function readCache() {
  try {
    ensureCacheDir();
    if (fs.existsSync(CACHE_FILE)) {
      const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
      const now = Date.now();
      
      // 캐시가 유효한지 확인 (24시간 이내)
      if (now - cacheData.timestamp < CACHE_DURATION) {
        return cacheData.data;
      }
    }
  } catch (error) {
    console.error('Cache read error:', error);
  }
  return null;
}

// 캐시 쓰기
function writeCache(data) {
  try {
    ensureCacheDir();
    const cacheData = {
      timestamp: Date.now(),
      data: data
    };
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cacheData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

// Bybit API에서 데이터 가져오기
async function fetchBybitData() {
  try {
    const providerMark = 'xkc2wsLqVomphpP%2FtV6RRQ%3D%3D';
    const url = `https://www.bybit.com/x-api/fapi/copymt5/public/v1/pub-provider/info?providerMark=${providerMark}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // Next.js 캐싱
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    
    if (json.retCode === 0 && json.result) {
      const result = json.result;
      
      // 데이터 변환
      return {
        tradingDays: parseInt(result.tradingDays) || 0,
        totalAssets: parseFloat(result.totalAssetsE8) / 100000000 || 0, // E8 단위를 일반 숫자로
        aum: parseFloat(result.aumE8) / 100000000 || 0, // E8 단위를 일반 숫자로
        followers: parseInt(result.followers) || 0,
        profitSharingRate: parseFloat(result.shareProfitRateE2) / 100 || 0, // E2 단위를 퍼센트로
        timestamp: Date.now()
      };
    }
    
    throw new Error('Invalid API response');
  } catch (error) {
    console.error('Bybit API fetch error:', error);
    throw error;
  }
}

export async function GET() {
  try {
    // 캐시 확인
    const cachedData = readCache();
    if (cachedData) {
      return NextResponse.json({
        success: true,
        data: cachedData,
        cached: true
      });
    }

    // 캐시가 없거나 만료된 경우 API에서 가져오기
    const data = await fetchBybitData();
    
    // 캐시에 저장
    writeCache(data);
    
    return NextResponse.json({
      success: true,
      data: data,
      cached: false
    });
  } catch (error) {
    console.error('API route error:', error);
    
    // 에러 발생 시 캐시된 데이터가 있으면 반환
    const cachedData = readCache();
    if (cachedData) {
      return NextResponse.json({
        success: true,
        data: cachedData,
        cached: true,
        error: 'Failed to fetch new data, using cached data'
      });
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to fetch data' 
      },
      { status: 500 }
    );
  }
}

