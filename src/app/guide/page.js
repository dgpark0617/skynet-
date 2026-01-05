'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GuidePage() {
  const COPY_TRADING_LINK = "https://www.bybit.com/copyMt5/trade-center/detail?providerMark=xkc2wsLqVomphpP%2FtV6RRQ%3D%3D";
  const [activeTab, setActiveTab] = useState('website');

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="grid-bg"></div>

      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div className="logo">
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent-primary)', letterSpacing: '-0.02em' }}>
                SKYNET <span style={{ color: 'var(--foreground)' }}>CAPITAL</span>
              </span>
            </Link>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <Link href="/#why">철학</Link>
            <Link href="/#how">전략</Link>
            <Link href="/#what">성과</Link>
            <a href={COPY_TRADING_LINK} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', color: 'white' }}>
              시작하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="title-center">
            <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              카피 트레이딩 시작 가이드
            </h1>
            <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              Bybit TradFi(MT5) 카피 트레이딩을 통해 스카이넷 캐피털의 전략을 복사하는 방법을 단계별로 안내합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#ffffff', paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Table of Contents */}
          <div className="glass-card" style={{ marginBottom: '3rem', padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', color: 'var(--foreground)' }}>
              목차
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#copy-master" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
                  • 마스터 트레이더 복사하기
                </a>
              </li>
              <li>
                <a href="#view-positions" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
                  • 포지션 보기
                </a>
              </li>
              <li>
                <a href="#edit-settings" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
                  • 카피 트레이딩 설정 편집
                </a>
              </li>
              <li>
                <a href="#adjust-investment" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
                  • 투자 금액 증가/감소
                </a>
              </li>
              <li>
                <a href="#cancel-copy" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
                  • 마스터 트레이더 복사 취소
                </a>
              </li>
            </ul>
          </div>

          {/* Tab Navigation */}
          <div style={{ marginBottom: '3rem', borderBottom: '2px solid var(--border-color)' }}>
            <div style={{ display: 'flex', gap: '0' }}>
              <button
                onClick={() => setActiveTab('website')}
                style={{
                  padding: '1rem 2rem',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'website' ? '3px solid var(--accent-primary)' : '3px solid transparent',
                  color: activeTab === 'website' ? 'var(--accent-primary)' : 'var(--muted-text)',
                  fontWeight: activeTab === 'website' ? '700' : '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '-2px'
                }}
              >
                웹사이트에서
              </button>
              <button
                onClick={() => setActiveTab('app')}
                style={{
                  padding: '1rem 2rem',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === 'app' ? '3px solid var(--accent-primary)' : '3px solid transparent',
                  color: activeTab === 'app' ? 'var(--accent-primary)' : 'var(--muted-text)',
                  fontWeight: activeTab === 'app' ? '700' : '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '-2px'
                }}
              >
                앱에서
              </button>
            </div>
          </div>

          {/* Website Content */}
          {activeTab === 'website' && (
            <>
          {/* Section 1: Copy a Master Trader */}
          <div id="copy-master" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                마스터 트레이더 복사하기
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Bybit TradFi 카피 트레이딩을 시작하는 단계별 가이드입니다. 팔로워는 최대 10명의 마스터 트레이더를 동시에 복사할 수 있습니다.
              </p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>1단계:</span>
                  카피 트레이딩 페이지 접속
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  상단 네비게이션 바에서 <strong style={{ color: 'var(--foreground)' }}>도구(Tools)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 카피 트레이딩(Copy Trading)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 카피 트레이딩 TradFi(Copy Trading TradFi)</strong>를 클릭하여 
                  카피 트레이딩 TradFi 페이지로 이동합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/b819f4c5df86c4250f3570f8f5bd5f11.jpg" 
                    alt="카피 트레이딩 페이지 접속 방법"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>2단계:</span>
                  마스터 트레이더 선택 및 복사 버튼 클릭
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  복사하고 싶은 마스터 트레이더 카드 하단의 <strong style={{ color: 'var(--foreground)' }}>복사(Copy)</strong> 버튼을 클릭하여 설정 페이지로 이동합니다.
                </p>
                <div style={{ marginTop: '1.5rem', marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/3a41d339107da7be2258b9cf7bc30970.jpg" 
                    alt="마스터 트레이더 복사 버튼 클릭"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div className="glass-card" style={{ background: '#f8fafc', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--accent-primary)' }}>
                  <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0 }}>
                    <strong style={{ color: 'var(--foreground)' }}>팁:</strong> 마스터 트레이더 카드를 클릭하면 포트폴리오 페이지로 이동하여 더 상세한 거래 성과 데이터를 확인할 수 있습니다.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>3단계:</span>
                  카피 트레이딩 설정 구성
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  다음 설정을 구성합니다:
                </p>
                <ul style={{ color: 'var(--muted-text)', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>투자 금액(Investment Amount):</strong> 최소 100 USDx, 최대 1,000,000 USDx까지 설정 가능합니다. 
                    마스터 트레이더가 더 높은 최소 투자 금액을 설정한 경우, 해당 금액이 표시됩니다.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>트레일링 스톱(Trailing Stop):</strong> 계좌의 최고 기록 자산 기준으로 자동으로 청산 지점을 상향 조정합니다. 
                    새로운 고점에만 상승하며 하향 조정되지 않습니다.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>손익 실현/손절 금액(TP/SL Amount):</strong> 
                    <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                      <li>손익 실현 주문: 지정한 수익 수준에 도달하면 자동 실행됩니다.</li>
                      <li>손절 주문: 지정한 손실 수준에 도달하면 자동 실행됩니다.</li>
                    </ul>
                  </li>
                </ul>
                <div className="glass-card" style={{ background: '#fff7ed', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--accent-gold)' }}>
                  <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>참고:</strong> TP/SL이 실행되면 해당 마스터 트레이더의 모든 포지션이 청산되고 자동으로 언팔로우됩니다. 
                    손절(SL) 실행은 시장 상황, 실행 우선순위, 시스템 처리 시간으로 인해 몇 분의 지연이 발생할 수 있습니다.
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/539774923fe82ad84be7e03277813263.jpg" 
                    alt="카피 트레이딩 설정 구성"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div className="glass-card" style={{ background: '#f0f9ff', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--accent-primary)' }}>
                  <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>수익 공유 비율:</strong> 마스터 트레이더의 레벨에 따라 수익 공유 비율이 달라집니다. 
                    예를 들어, 수익 공유 비율이 10%인 경우, 팔로워는 해당 마스터 트레이더 하에서 획득한 누적 순수익의 10%를 마스터 트레이더와 공유해야 합니다.
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>4단계:</span>
                  동의 확인 및 복사 시작
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  설정을 확인한 후, <strong style={{ color: 'var(--foreground)' }}>동의 확인란(Agreement Acknowledgment Box)</strong>에 체크하고 
                  <strong style={{ color: 'var(--foreground)' }}> 지금 복사(Copy Now)</strong> 버튼을 클릭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/db4fefaab024aa98a62579a2f634da09.jpg" 
                    alt="동의 확인 및 복사 시작"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div className="glass-card" style={{ background: '#f0fdf4', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--accent-success)' }}>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                  축하합니다! 마스터 트레이더를 성공적으로 팔로우했습니다.
                </p>
              </div>

              <div className="glass-card" style={{ background: '#fef2f2', padding: '1.5rem', marginTop: '1.5rem', borderLeft: '4px solid var(--accent-danger)' }}>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>주의사항:</strong> TradFi 거래는 주말, 국제 공휴일, 시스템 유지보수 시간에는 이용할 수 없습니다. 
                  이러한 시간에는 카피 트레이딩 TradFi 홈페이지에 알림이 표시됩니다. 또한 거래 시간 중에도 일부 거래 쌍이 일시적으로 이용 불가능할 수 있습니다. 
                  마스터 트레이더의 포트폴리오에서 이용 불가능한 거래 쌍은 카피 트레이딩 생성 시 복사되지 않습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: View Your Positions */}
          <div id="view-positions" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                포지션 보기
              </h2>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>1단계:</span>
                  내 TradFi 카피 트레이딩 페이지 접속
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  복사한 포지션을 보려면 카피 트레이딩 TradFi 페이지에서 <strong style={{ color: 'var(--foreground)' }}>내 TradFi 카피 트레이딩(My TradFi Copy Trades)</strong>을 클릭하여 
                  사용자 센터(팔로워)로 이동합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/f8568a113697e3c3419eb0c65a629d33.jpg" 
                    alt="내 TradFi 카피 트레이딩 페이지 접속"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>2단계:</span>
                  대시보드에서 데이터 확인
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  사용자 센터(팔로워)의 <strong style={{ color: 'var(--foreground)' }}>대시보드(Dashboard)</strong>에서 다음 파라미터를 포함한 종합 데이터를 확인할 수 있습니다:
                </p>
                
                <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid var(--border-color)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', color: 'var(--foreground)' }}>파라미터</th>
                        <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '700', color: 'var(--foreground)' }}>설명</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>총 자산(Total Equity)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>실현 손익과 현재 보유 자산을 포함한 계좌의 총 가치입니다.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>사용 중인 마진(Used Margin)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>카피 트레이딩 또는 TradFi 투자에서 오픈 포지션을 유지하기 위해 현재 할당된 잔액입니다.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>사용 가능한 마진(Free Margin)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>추가 마진 요구사항 없이 새로운 거래를 열거나 시장 변동을 흡수할 수 있는 남은 잔액입니다.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>미실현 손익(Unrealized P&L)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>아직 청산되거나 실현되지 않은 오픈 포지션의 손익입니다.</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>누적 수익 공유(Cumulative Profit Share)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>카피 트레이딩 계약의 일부로 전략 제공자와 공유한 총 수익 금액입니다.</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '1rem', fontWeight: '600', color: 'var(--foreground)' }}>누적 투자(Cumulative Investment)</td>
                        <td style={{ padding: '1rem', color: 'var(--muted-text)' }}>시간이 지나면서 카피 트레이딩 또는 TradFi 시장에 투자한 총 자금입니다.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/1e74cab85d77de7a8d7a80f5a8afd97e.jpg" 
                    alt="대시보드 데이터 확인"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Edit Your Copy Trade Settings */}
          <div id="edit-settings" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                카피 트레이딩 설정 편집
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                아래 단계에 따라 카피 트레이딩의 파라미터를 조정할 수 있습니다.
              </p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>1단계:</span>
                  사용자 센터(팔로워) 접속
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  마스터 트레이더 포트폴리오 페이지 좌측 상단의 <strong style={{ color: 'var(--foreground)' }}>내 TradFi 카피 트레이딩(My TradFi Copy Trades)</strong>을 클릭하여 
                  사용자 센터(팔로워)로 이동합니다.
                </p>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>2단계:</span>
                  상세 정보 페이지 접속
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>팔로잉(Following)</strong> 탭에서 해당 마스터 트레이더의 
                  <strong style={{ color: 'var(--foreground)' }}> 상세 정보(Details)</strong>를 클릭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/72546882f221a6f2ec29669e29e66029.jpg" 
                    alt="상세 정보 페이지 접속"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>3단계:</span>
                  설정 변경
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>현재 팔로잉(Currently Following)</strong> 페이지로 이동하여 
                  <strong style={{ color: 'var(--foreground)' }}> 추가 설정(More Settings)</strong>을 클릭합니다. 
                  트레일링 스톱, 손익 실현, 손절 금액을 업데이트한 후 <strong style={{ color: 'var(--foreground)' }}>설정 구성(Configure Settings)</strong>을 클릭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/dda0a380496ced5ab33d6bae43865891.jpg" 
                    alt="설정 변경"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Increase or Reduce Investment Amount */}
          <div id="adjust-investment" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                투자 금액 증가/감소
              </h2>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>단계:</span>
                  투자 금액 조정
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>사용자 센터(팔로워)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 팔로잉(Following)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 투자 금액 조정(Adjust Investment)</strong>으로 이동합니다. 
                  그 다음 <strong style={{ color: 'var(--foreground)' }}>투자 증가(Increase Investment)</strong> 또는 
                  <strong style={{ color: 'var(--foreground)' }}> 투자 감소(Reduce Investment)</strong>를 클릭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/4c91cc6eb837d0bd1bccac879d76fe63.jpg" 
                    alt="투자 금액 증가"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                <div className="glass-card" style={{ background: '#fef2f2', padding: '1.5rem', marginTop: '1rem', borderLeft: '4px solid var(--accent-danger)' }}>
                  <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>주의:</strong> 투자 감소 요청은 제출 후 취소할 수 없습니다.
                  </p>
                </div>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/75382eaf2d367061d2935914c7def61e.jpg" 
                    alt="투자 금액 감소"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>

              <div className="glass-card" style={{ background: '#f0f9ff', padding: '1.5rem', marginTop: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>참고사항:</strong>
                </p>
                <ul style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginTop: '0.75rem', paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>
                    투자 금액을 증가하거나 감소해도 손익 실현과 손절에 영향을 주지 않습니다. 이는 팔로잉 기간 동안의 총 실현 및 미실현 손익을 기준으로 하기 때문입니다.
                  </li>
                  <li>
                    투자 감소 창에 최대 감소 가능 금액이 표시됩니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5: Cancel Copy Your Master Trader */}
          <div id="cancel-copy" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                마스터 트레이더 복사 취소
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                마스터 트레이더 복사를 취소하려면 <strong style={{ color: 'var(--foreground)' }}>사용자 센터(팔로워)</strong> → 
                <strong style={{ color: 'var(--foreground)' }}> 팔로잉(Following)</strong>으로 이동하여 
                언팔로우하고 싶은 마스터 트레이더의 <strong style={{ color: 'var(--foreground)' }}>상세 정보(Details)</strong>를 클릭합니다.
              </p>

              <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img 
                  src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/49ee0caa4fe6afd91e8f071c6ff694ed.jpg" 
                  alt="마스터 트레이더 복사 취소"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <div className="glass-card" style={{ background: '#fef2f2', padding: '1.5rem', marginTop: '1.5rem', borderLeft: '4px solid var(--accent-danger)' }}>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                  <strong style={{ color: 'var(--foreground)' }}>중요:</strong> 마스터 트레이더를 언팔로우하면 해당 마스터 트레이더로부터 복사한 모든 포지션이 청산됩니다. 
                  비거래 시간 중 오픈 포지션은 청산에 지연이 발생할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

            </>
          )}

          {/* App Content */}
          {activeTab === 'app' && (
            <>
          {/* Section 1: Copy a Master Trader (App) */}
          <div id="copy-master" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                마스터 트레이더 복사하기
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                Bybit 모바일 앱에서 TradFi 카피 트레이딩을 시작하는 단계별 가이드입니다.
              </p>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>1단계:</span>
                  카피 트레이딩 페이지 접속
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  앱 하단의 <strong style={{ color: 'var(--foreground)' }}>도구(Tools)</strong> 탭을 선택한 후, 
                  <strong style={{ color: 'var(--foreground)' }}> 카피 트레이딩(Copy Trading)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> TradFi</strong>를 선택합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/de931976493ba3445b1507acb96785db.jpg" 
                    alt="앱에서 카피 트레이딩 페이지 접속"
                    style={{ width: '100%', maxWidth: '400px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>2단계:</span>
                  마스터 트레이더 선택 및 복사
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  복사하고 싶은 마스터 트레이더를 선택하고 <strong style={{ color: 'var(--foreground)' }}>복사(Copy)</strong> 버튼을 탭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/1b9aec1c5bd779852a97e952ba63a10f.jpg" 
                    alt="앱에서 마스터 트레이더 선택"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>3단계:</span>
                  카피 트레이딩 설정 구성
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  다음 설정을 구성합니다:
                </p>
                <ul style={{ color: 'var(--muted-text)', lineHeight: '1.8', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>투자 금액:</strong> 최소 100 USDx, 최대 1,000,000 USDx까지 설정 가능합니다.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>트레일링 스톱:</strong> 자동 청산 지점을 설정합니다.
                  </li>
                  <li style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--foreground)' }}>손익 실현/손절 금액:</strong> TP/SL을 설정합니다.
                  </li>
                </ul>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/9c5758695bf213aedb17052ca82b213c.jpg" 
                    alt="앱에서 카피 트레이딩 설정"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>4단계:</span>
                  동의 확인 및 복사 시작
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  동의 확인란에 체크하고 <strong style={{ color: 'var(--foreground)' }}>지금 복사(Copy Now)</strong> 버튼을 탭합니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/92c074bd06a270153e2946c96220ea80.jpg" 
                    alt="앱에서 동의 확인 및 복사"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: View Your Positions (App) */}
          <div id="view-positions" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                포지션 보기
              </h2>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700', color: 'var(--foreground)' }}>
                  <span style={{ color: 'var(--accent-primary)', marginRight: '0.5rem' }}>단계:</span>
                  내 카피 트레이딩 확인
                </h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '1rem' }}>
                  앱에서 <strong style={{ color: 'var(--foreground)' }}>도구(Tools)</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 카피 트레이딩</strong> → 
                  <strong style={{ color: 'var(--foreground)' }}> 내 카피 트레이딩(My Copy Trades)</strong>으로 이동하여 포지션을 확인할 수 있습니다.
                </p>
                <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <img 
                    src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/198b19e3f892b8e0660542b4a1097ec9.jpg" 
                    alt="앱에서 포지션 보기"
                    style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Edit Settings (App) */}
          <div id="edit-settings" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                카피 트레이딩 설정 편집
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                앱에서 내 카피 트레이딩 페이지로 이동하여 설정을 변경할 수 있습니다.
              </p>

              <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img 
                  src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/14e5e1550dd92442e411a536e0171cdc.jpg" 
                  alt="앱에서 설정 편집"
                  style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
            </div>
          </div>

          {/* Section 4: Adjust Investment (App) */}
          <div id="adjust-investment" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                투자 금액 증가/감소
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                앱에서 내 카피 트레이딩 페이지로 이동하여 투자 금액을 조정할 수 있습니다.
              </p>

              <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img 
                  src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/adc8a7e379dfc6697e73142c87419f66.jpg" 
                  alt="앱에서 투자 금액 조정"
                  style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
            </div>
          </div>

          {/* Section 5: Cancel Copy (App) */}
          <div id="cancel-copy" style={{ marginBottom: '4rem', scrollMarginTop: '120px' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--foreground)', borderBottom: '2px solid var(--accent-primary)', paddingBottom: '1rem' }}>
                마스터 트레이더 복사 취소
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.8', marginBottom: '2rem' }}>
                앱에서 내 카피 트레이딩 페이지로 이동하여 언팔로우할 수 있습니다.
              </p>

              <div style={{ marginTop: '1.5rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                <img 
                  src="https://www.bybit.com/common-static/cht-static/help-center-svc/article/b7b94b9c3629906bae252527d5364286.jpg" 
                  alt="앱에서 복사 취소"
                  style={{ width: '100%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto' }}
                />
              </div>
            </div>
          </div>
            </>
          )}

          {/* CTA Section */}
          <div className="glass-card" style={{ padding: '3rem', background: 'var(--accent-primary)', color: 'white', textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>
              지금 바로 시작하세요
            </h2>
            <p style={{ fontSize: '1.1rem', opacity: '0.95', marginBottom: '2rem', lineHeight: '1.7' }}>
              스카이넷 캐피털의 검증된 전략을 복사하여 일관된 수익을 창출하세요.
            </p>
            <a 
              href={COPY_TRADING_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ 
                background: 'white', 
                color: 'var(--accent-primary)', 
                fontSize: '1.1rem', 
                padding: '1.25rem 3rem',
                display: 'inline-block',
                textDecoration: 'none'
              }}
            >
              카피 트레이딩 시작하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            <Link href="/" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: '600' }}>
              ← 홈으로 돌아가기
            </Link>
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>
            © 2024 스카이넷 캐피털. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

