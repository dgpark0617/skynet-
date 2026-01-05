'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const REFERRAL_CODE = "파트너 문의"; // 준비 중
  const COPY_TRADING_LINK = "https://www.bybit.com/copyMt5/trade-center/detail?providerMark=xkc2wsLqVomphpP%2FtV6RRQ%3D%3D";
  
  const [bybitStats, setBybitStats] = useState(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // Bybit 통계 데이터 가져오기
  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/bybit-stats');
        const result = await response.json();
        if (result.success && result.data) {
          setBybitStats(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch Bybit stats:', error);
      } finally {
        setIsLoadingStats(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div className="grid-bg"></div>

      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div className="logo">
            <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--accent-primary)', letterSpacing: '-0.02em' }}>
              SKYNET <span style={{ color: 'var(--foreground)' }}>CAPITAL</span>
            </span>
          </div>
          <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <a href="#why">철학</a>
            <a href="#how">전략</a>
            <a href="#what">성과</a>
            <a href="/guide" style={{ color: 'var(--muted-text)', textDecoration: 'none', fontWeight: '500', fontSize: '0.95rem', transition: 'all 0.2s ease', position: 'relative', padding: '0.25rem 0' }}>가이드</a>
            <a href={COPY_TRADING_LINK} className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', color: 'white' }}>
              시작하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container hero">
        <div className="badge-gold" style={{ marginBottom: '2rem' }}>
          바이빗 공식 전략 파트너
        </div>

        <h1>
          기관급 <br />
          <span className="text-gradient">알고리즘 트레이딩</span>
        </h1>

        <p>
          <strong style={{ color: 'var(--accent-primary)' }}>실계좌로 검증된 독점 알고리즘</strong>이 리스크를 정밀하게 통제하며,
          모든 시장 조건에서 일관된 성과를 입증합니다.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={COPY_TRADING_LINK} className="btn-primary">복사 거래 연결</a>
          <a href="#what" className="btn-secondary" style={{ padding: '0.875rem 2.5rem', borderRadius: '6px', textDecoration: 'none', color: 'var(--foreground)', fontWeight: '600', fontSize: '1rem', border: '1px solid var(--border-color)', background: 'white', transition: 'all 0.2s ease' }}>
            성과 보기
          </a>
        </div>
      </header>

      {/* Section: WHY - 실패하는 트레이더들을 보며 비전을 제시하게 된 계기 */}
      <section id="why" className="container">
        <div className="title-center">
          <h2 className="text-gradient">기울어진 운동장을 바로잡다</h2>
          <p className="text-muted">정보의 비대칭을 넘어, 누구에게나 공정한 승리의 기회를 설계하기 위해</p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '4rem' }}>
          <div className="glass-card" style={{ padding: '4rem', borderLeft: '4px solid #ef4444' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.3', color: 'var(--foreground)' }}>
              <strong>왜 대부분 실패하는가</strong>
            </div>
            <p className="long-text" style={{ fontSize: '1.2rem', color: 'var(--muted-text)', lineHeight: '1.9', marginBottom: '3rem', fontWeight: '500' }}>
              왜 똑똑한 사람들이 시장 앞에서 무너지는가?
              <br />
              문제는 지능이 아닌, <strong>'인간'이라는 한계</strong> 그 자체
              <br /><br />
              순간의 망설임, 지친 집중력, 깨져버린 원칙
              <br />
              시장은 인간의 본능을 역이용합니다. 감정적 편향과 체력적 한계는 필연적인 실패를 부릅니다.
              <br /><br />
              당신의 잘못이 아닙니다. <strong>인간이 이길 수 없도록 설계된 불합리한 게임</strong>일 뿐입니다.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '900px', margin: '4rem auto 0 auto' }}>
          <div className="glass-card" style={{ padding: '4rem', borderLeft: '4px solid #22c55e' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: '1.3', color: 'var(--foreground)' }}>
              <strong>인간의 약점을 기술로 삭제하다</strong>
            </div>
            <p className="long-text" style={{ fontSize: '1.2rem', color: 'var(--muted-text)', lineHeight: '1.9', marginBottom: '2rem', fontWeight: '500' }}>
              <strong>'예측'하지 않습니다. 철저하게 '대응'할 뿐입니다.</strong>
              <br /><br />
              흔들리지 않는 원칙으로 매 순간 최적의 판단을 내립니다.
              <br />
              숫자로 검증된 성과만이 유일한 진실입니다.
              <br /><br />
              누구나 프로와 같은 무기로 싸울 수 있는 세상.
              <br />
              이것이 우리가 정의하는 공정한 승리의 방식입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Section: HOW - 그래서 어떤 방식으로 접근했는가 */}
      <section id="how" style={{ background: '#f8fafc', marginTop: '6rem' }}>
        <div className="container">
          <div className="title-center">
            <h2 className="text-gradient">해결의 방법</h2>
            <p className="text-muted">4가지 핵심 원칙으로 만든 시스템</p>
          </div>

          <div className="strategy-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="glass-card">
              <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>01</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>완전한 객관성</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                <strong style={{ color: 'var(--foreground)' }}>"감정이 아닌, 규칙이 거래합니다."</strong>
                <br /><br />
                인간의 편향을 원천 차단하는 100% 알고리즘 자동화.
                모든 결정은 철저한 데이터와 사전 정의된 로직에 따릅니다.
              </p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>02</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>통계적 확실성</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                <strong style={{ color: 'var(--foreground)' }}>"우연을 배제하고 필연을 만듭니다."</strong>
                <br /><br />
                수만 번의 시뮬레이션과 대규모 데이터 검증.
                소수의 행운이 아닌, 대수의 법칙으로 증명된 승리 공식입니다.
              </p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>03</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>시장 중립성</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                <strong style={{ color: 'var(--foreground)' }}>"어떤 파도에도 흔들리지 않습니다."</strong>
                <br /><br />
                상승장과 하락장, 모든 상황에서 수익 기회를 포착합니다.
                시장의 방향성을 예측하는 대신, 변동성 그 자체를 수익화합니다.
              </p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '700', letterSpacing: '0.1em' }}>04</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>투명한 신뢰</h3>
              <p className="text-muted" style={{ lineHeight: '1.7' }}>
                <strong style={{ color: 'var(--foreground)' }}>"숨기지 않습니다. 증명합니다."</strong>
                <br /><br />
                모든 거래 내역의 실시간 공개와 제3자 검증 리포트.
                조작 불가능한 투명성만이 진정한 신뢰의 기반입니다.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Section: WHAT - 결과적으로 무엇을 만들어냈는가 */}
      <section id="what" className="container" style={{ paddingTop: '8rem' }}>
        <div className="title-center" style={{ marginBottom: '4rem' }}>
          <h2 className="text-gradient">증명된 결과</h2>
          <p className="text-muted">
            투명하게 공개된 {bybitStats?.tradingDays ? `${bybitStats.tradingDays}일간` : '260일간'}의 실전 기록이 우리의 실력을 증명합니다.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <a 
              href="https://www.bybit.com/copyMt5/trade-center/detail?providerMark=xkc2wsLqVomphpP%2FtV6RRQ%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ 
                fontSize: '1rem', 
                padding: '0.875rem 2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>실시간 거래 현황 보기</span>
              <span style={{ fontSize: '0.85rem', opacity: '0.9' }}>→</span>
            </a>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '1rem', opacity: '0.8' }}>
              Bybit 카피트레이딩 플랫폼에서 실시간 포지션, 거래 내역, 성과 통계 확인
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', background: '#fcfcfc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: 'var(--foreground)' }}>MT5 감사 리포트 요약</span>
            <span className="badge-gold">실계좌</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '3rem', margin: '0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>총 수익률</span>
              <span className="stat-value" style={{ color: 'var(--accent-success)', fontSize: '2.5rem', marginBottom: 0 }}>+54.88%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>수익 팩터</span>
              <span className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: 0 }}>2.33</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>월평균 수익률</span>
              <span className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: 0 }}>5.5%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>총 거래 건수</span>
              <span className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: 0 }}>6,940</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid var(--border-color)' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>최대 연속 승리</span>
              <span className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: 0 }}>1,496</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem' }}>
              <span className="stat-label" style={{ fontSize: '1.2rem', marginBottom: 0 }}>자동화 비율</span>
              <span className="stat-value" style={{ color: 'var(--accent-primary)', fontSize: '2.5rem', marginBottom: 0 }}>94.8%</span>
            </div>
          </div>

          <div className="performance-highlight" style={{ margin: '0 3rem 3rem 3rem', textAlign: 'left' }}>
            <p className="long-text" style={{ fontSize: '1rem', color: 'var(--foreground)', lineHeight: '1.6', marginBottom: '2rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>"단 하나의 자산에 집중하여, 시장을 이기는 법칙을 증명했습니다."</strong>
              {bybitStats?.tradingDays ? `${bybitStats.tradingDays}일 이상` : '260일 이상'}의 실거래, <strong>54.88%</strong>의 누적 수익률.
              <br/>
              우리는 단기간의 행운을 믿지 않습니다. EURUSD+ 집중 전략을 통해 월평균 <strong>5.5%</strong>의 수익을 꾸준히 기록하며, 
              롱/숏 포지션의 완벽한 균형(3,466 vs 3,474)으로 시장의 방향과 무관하게 수익을 창출합니다. 
              수익 팩터 <strong>2.33</strong>은 우리의 시스템이 손실보다 2배 이상의 효율로 수익을 만들어냄을 증명합니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--muted-text)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-success)', fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>•</span>
                <span><strong style={{ color: 'var(--foreground)' }}>변하지 않는 기록:</strong> "{bybitStats?.tradingDays ? `${bybitStats.tradingDays}일` : '260일'}, Bybit 실계좌, 실제 자금." 숫자로 기록된 시간은 거짓말을 하지 않습니다.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-success)', fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>•</span>
                <span><strong style={{ color: 'var(--foreground)' }}>통계적 필연성:</strong> 6,940번의 거래 데이터가 증명합니다. 이것은 우연이 아닌, 철저하게 계산된 통계의 승리입니다.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--accent-success)', fontWeight: '700', flexShrink: 0, marginTop: '0.1rem' }}>•</span>
                <span><strong style={{ color: 'var(--foreground)' }}>감정의 배제:</strong> 94.8%의 완전 자동화 비율. 인간의 불안과 탐욕이 개입할 틈을 기술로 완벽하게 차단했습니다.</span>
              </div>
            </div>
          </div>
        </div>

        {/* MT5 Full Report */}
        <div className="glass-card" style={{ marginTop: '3rem', padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '2rem', borderBottom: '1px solid var(--border-color)', background: '#fcfcfc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: '700', color: 'var(--foreground)' }}>MT5 전체 거래 리포트</span>
            <span className="badge-gold">감사 완료</span>
          </div>
          <div style={{ width: '100%', height: '800px', border: 'none', overflow: 'auto' }}>
            <iframe
              src="/reports/mt5-report.html"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block'
              }}
              title="MT5 Trading Report"
            />
          </div>
        </div>
      </section>

      {/* Section: CTA */}
      <section style={{ textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '5rem', background: 'var(--accent-primary)', color: 'white' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white', fontWeight: '700' }}>기관급 거래 접근</h2>
            <p className="long-text" style={{ fontSize: '1.1rem', opacity: '0.95', marginBottom: '3rem', lineHeight: '1.7' }}>
              바이빗의 안전한 인프라를 통해 기관급 전략에 접근하세요.<br />
              성공적인 투자를 위한 파트너십을 제안합니다. 개인 및 기관 투자자를 위한 맞춤형 솔루션을 논의해 보세요.
            </p>

            <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.12)', padding: '1.25rem 3rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '3rem', backdropFilter: 'blur(8px)' }}>
              <span style={{ opacity: '0.9', marginRight: '1rem', fontSize: '0.95rem', fontWeight: '500' }}>파트너 코드:</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '700', letterSpacing: '0.05em' }}>{REFERRAL_CODE}</span>
            </div>

            <br />
            <a href={COPY_TRADING_LINK} className="btn-primary" style={{ background: 'white', color: 'var(--accent-primary)', fontSize: '1.1rem', padding: '1.25rem 3rem' }}>
              복사 거래 신청하기
            </a>
          </div>
        </div>
      </section>

      {/* Section: Custom Program */}
      <section style={{ background: '#f8fafc', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '700', color: 'var(--foreground)' }}>
              맞춤형 알고리즘 개발 서비스
            </h2>
            <p className="long-text" style={{ fontSize: '1.1rem', color: 'var(--muted-text)', lineHeight: '1.7', marginBottom: '3rem' }}>
              파트너 코드를 통해 가입하신 고객님께는 <strong style={{ color: 'var(--foreground)' }}>무료로 개인 전용 자동매매 프로그램</strong>을 개발해드립니다.
              <br />
              <br />
              귀하의 거래 선호도와 리스크 프로필에 맞춘 맞춤형 알고리즘을 설계하여, 
              개인화된 자동매매 솔루션을 제공합니다.
            </p>
            <a 
              href="https://open.kakao.com/o/sy2UErbd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary" 
              style={{ 
                fontSize: '1.1rem', 
                padding: '1.25rem 3rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <span>카카오톡 상담 신청</span>
              <span style={{ fontSize: '0.9rem', opacity: '0.9' }}>→</span>
            </a>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted-text)', marginTop: '1.5rem', opacity: '0.8' }}>
              * 파트너 코드 가입 후 카카오톡 오픈채팅을 통해 상담 신청 가능
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p style={{ fontWeight: '700', color: 'var(--foreground)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
            SKYNET CAPITAL
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted-text)' }}>
            © 2026 Skynet Capital LP. All rights reserved.
          </p>
          <p className="disclaimer-text" style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--muted-text)', lineHeight: '1.6' }}>
            면책조항: 디지털 자산 거래는 상당한 위험을 수반합니다. 과거 성과는 미래 결과를 보장하지 않습니다.
            모든 금융 결정은 개인의 위험 감수 능력과 재무 고문과의 상담을 바탕으로 이루어져야 합니다.
          </p>
        </div>
      </footer>
    </div>
  );
}


