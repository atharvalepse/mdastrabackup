'use client'
import './HeroArt.css';

/**
 * HeroArt — a single, uniform "glass dashboard panel" hero illustration system.
 *
 * Every page renders the SAME panel chrome (window dots + title + status badge +
 * a two-metric row) so the site feels cohesive, with a themed, minimalist SVG
 * "visual" inside that matches each page's content. Replaces the old AI/stock
 * hero images and the raster growth-chart.
 *
 * Usage: <HeroArt variant="seo" />
 *
 * The panel reuses the existing .hero-dashboard-card / .dashboard-* classes from
 * Hero.css so its styling stays automatically in sync with the home hero card.
 */

/* ---------- shared SVG scaffolding ---------- */

const VB = '0 0 460 172';

const Defs = ({ uid }) => (
  <defs>
    <linearGradient id={`${uid}-line`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#7c3aed" />
      <stop offset="100%" stopColor="#c026d3" />
    </linearGradient>
    <linearGradient id={`${uid}-area`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.38" />
      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
    </linearGradient>
    <linearGradient id={`${uid}-cyan`} x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#22d3ee" />
      <stop offset="100%" stopColor="#7c3aed" />
    </linearGradient>
    <linearGradient id={`${uid}-pin`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#d946ef" />
      <stop offset="100%" stopColor="#7c3aed" />
    </linearGradient>
    <linearGradient id={`${uid}-bar`} x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.55" />
      <stop offset="100%" stopColor="#c026d3" />
    </linearGradient>
  </defs>
);

const GRID = 'rgba(255,255,255,0.06)';
const HAIR = 'rgba(255,255,255,0.10)';
const SURF = 'rgba(255,255,255,0.04)';
const INK = 'rgba(255,255,255,0.55)';
const INK_DIM = 'rgba(255,255,255,0.32)';

const gridlines = () =>
  [42, 84, 126].map((y) => (
    <line key={y} x1="14" y1={y} x2="446" y2={y} stroke={GRID} strokeWidth="1" />
  ));

/* ---------- visual modules ---------- */

// Rising area + line chart (home / analytics)
const Area = (uid) => (
  <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
    <Defs uid={uid} />
    {gridlines()}
    <path
      d="M14,138 C60,132 84,108 122,110 S196,84 234,74 S308,62 344,44 S416,30 446,20 L446,150 L14,150 Z"
      fill={`url(#${uid}-area)`}
    />
    <path
      d="M14,138 C60,132 84,108 122,110 S196,84 234,74 S308,62 344,44 S416,30 446,20"
      fill="none"
      stroke={`url(#${uid}-line)`}
      strokeWidth="3"
      strokeLinecap="round"
    />
    {[[122, 110], [234, 74], [344, 44]].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="3.5" fill="#0f0a1e" stroke="#c084fc" strokeWidth="2" />
    ))}
    <circle cx="446" cy="20" r="9" fill="#c026d3" opacity="0.25" className="ha-glow" />
    <circle cx="446" cy="20" r="5" fill="#fff" />
  </svg>
);

// SEO rank tracker — SERP rows climbing (seo)
const RankList = (uid) => {
  const rows = [
    { y: 8, rank: '1', w: 236, chip: '+6', hi: true },
    { y: 60, rank: '2', w: 196, chip: '+3', hi: false },
    { y: 112, rank: '4', w: 168, chip: '+2', hi: false },
  ];
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      {rows.map((r, i) => (
        <g key={i}>
          <rect
            x="14" y={r.y} width="432" height="44" rx="11"
            fill={r.hi ? 'rgba(124,58,237,0.16)' : SURF}
            stroke={r.hi ? 'rgba(124,58,237,0.45)' : HAIR}
            strokeWidth="1"
          />
          <circle cx="42" cy={r.y + 22} r="14" fill={r.hi ? `url(#${uid}-pin)` : 'rgba(255,255,255,0.08)'} />
          <text x="42" y={r.y + 27} textAnchor="middle" fontSize="14" fontWeight="700" fill={r.hi ? '#fff' : INK}>{r.rank}</text>
          <rect x="68" y={r.y + 14} width={r.w} height="8" rx="4" fill={r.hi ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.28)'} />
          <rect x="68" y={r.y + 28} width={r.w - 70} height="6" rx="3" fill="rgba(255,255,255,0.14)" />
          <rect x="376" y={r.y + 13} width="58" height="20" rx="10" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
          <path d={`M392,${r.y + 26} l4,-6 l4,6`} fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="410" y={r.y + 27} fontSize="11" fontWeight="700" fill="#10b981">{r.chip}</text>
        </g>
      ))}
    </svg>
  );
};

// Performance gauge + site wireframe (website-development)
const Gauge = (uid) => {
  const r = 52, cx = 96, cy = 92, C = 2 * Math.PI * r;
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
      <circle
        cx={cx} cy={cy} r={r} fill="none" stroke={`url(#${uid}-line)`} strokeWidth="12"
        strokeLinecap="round" strokeDasharray={`${C * 0.98} ${C}`} transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy - 2} textAnchor="middle" fontSize="34" fontWeight="700" fill="#fff">98</text>
      <text x={cx} y={cy + 20} textAnchor="middle" fontSize="11" letterSpacing="1" fill={INK_DIM}>PERFORMANCE</text>
      {/* mini browser wireframe */}
      <rect x="196" y="20" width="250" height="132" rx="12" fill={SURF} stroke={HAIR} strokeWidth="1" />
      <line x1="196" y1="44" x2="446" y2="44" stroke={HAIR} strokeWidth="1" />
      {[210, 224, 238].map((x, i) => <circle key={i} cx={x} cy="32" r="3" fill="rgba(255,255,255,0.2)" />)}
      <rect x="212" y="58" width="120" height="10" rx="5" fill={`url(#${uid}-line)`} />
      <rect x="212" y="76" width="180" height="6" rx="3" fill="rgba(255,255,255,0.16)" />
      <rect x="212" y="90" width="150" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="212" y="112" width="70" height="22" rx="6" fill="rgba(124,58,237,0.5)" />
      <rect x="356" y="58" width="74" height="76" rx="8" fill="rgba(255,255,255,0.05)" stroke={HAIR} strokeWidth="1" />
      <path d="M372,104 l10,-12 l10,10 l8,-14" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

// Map with location pins + rating (gmb / local-service / real-estate)
const MapPins = (uid) => {
  const pins = [[118, 58], [300, 44], [360, 116], [214, 128]];
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      <rect x="14" y="10" width="432" height="152" rx="16" fill={SURF} stroke={HAIR} strokeWidth="1" />
      {/* faint streets */}
      {[52, 96, 140].map((y) => <line key={y} x1="14" y1={y} x2="446" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      {[130, 240, 350].map((x) => <line key={x} x1={x} y1="10" x2={x} y2="162" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      {pins.map(([px, py], i) => (
        <g key={i}>
          <circle cx={px} cy={py} r="7" fill="rgba(255,255,255,0.12)" />
          <circle cx={px} cy={py} r="2.5" fill={INK} />
        </g>
      ))}
      {/* highlighted business pin */}
      <circle cx="176" cy="86" r="22" fill="rgba(217,70,239,0.18)" className="ha-glow" />
      <path d="M176,64 c-13,0 -22,10 -22,22 c0,15 22,30 22,30 c0,0 22,-15 22,-30 c0,-12 -9,-22 -22,-22 Z" fill={`url(#${uid}-pin)`} />
      <circle cx="176" cy="86" r="8" fill="#fff" />
      {/* rating chip */}
      <rect x="330" y="24" width="96" height="26" rx="13" fill="rgba(15,10,30,0.85)" stroke={HAIR} strokeWidth="1" />
      <path d="M348,37 l2.6,5.3 l5.8,0.8 l-4.2,4.1 l1,5.8 l-5.2,-2.7 l-5.2,2.7 l1,-5.8 l-4.2,-4.1 l5.8,-0.8 Z" fill="#fbbf24" transform="translate(0,-6)" />
      <text x="368" y="42" fontSize="13" fontWeight="700" fill="#fff">4.9</text>
      <text x="392" y="42" fontSize="11" fill={INK_DIM}>/5</text>
    </svg>
  );
};

// Social feed posts + engagement (social-media-marketing)
const Feed = (uid) => {
  const cards = [
    { y: 8, name: 130, heart: '2.4K', bar: 300 },
    { y: 90, name: 100, heart: '5.1K', bar: 250 },
  ];
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      {cards.map((c, i) => (
        <g key={i}>
          <rect x="14" y={c.y} width="432" height="74" rx="13" fill={SURF} stroke={HAIR} strokeWidth="1" />
          <circle cx="44" cy={c.y + 30} r="15" fill={`url(#${uid}-pin)`} />
          <rect x="68" y={c.y + 20} width={c.name} height="8" rx="4" fill="rgba(255,255,255,0.4)" />
          <rect x="68" y={c.y + 34} width={c.name - 40} height="6" rx="3" fill="rgba(255,255,255,0.16)" />
          <rect x="26" y={c.y + 54} width={c.bar} height="6" rx="3" fill="rgba(255,255,255,0.12)" />
          <path
            d="M0,3 C-3,-2 -10,0 -10,5 C-10,10 -3,13 0,16 C3,13 10,10 10,5 C10,0 3,-2 0,3 Z"
            transform={`translate(400,${c.y + 24})`}
            fill="#ec4899"
          />
          <text x="420" y={c.y + 40} fontSize="12" fontWeight="700" fill="#fff">{c.heart}</text>
        </g>
      ))}
    </svg>
  );
};

// Ad funnel: impressions → clicks → conversions (google-ads)
const Funnel = (uid) => {
  const rows = [
    { w: 432, label: 'Impressions', val: '120K', o: 0.9 },
    { w: 320, label: 'Clicks', val: '8.4K', o: 1 },
    { w: 208, label: 'Conversions', val: '640', o: 1 },
  ];
  let y = 14;
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      {rows.map((r, i) => {
        const x = (460 - r.w) / 2;
        const el = (
          <g key={i}>
            <rect x={x} y={y} width={r.w} height="36" rx="9" fill={`url(#${uid}-line)`} opacity={r.o} />
            <text x={x + 16} y={y + 23} fontSize="13" fontWeight="600" fill="#fff">{r.label}</text>
            <text x={x + r.w - 16} y={y + 23} textAnchor="end" fontSize="13" fontWeight="700" fill="#fff">{r.val}</text>
          </g>
        );
        y += 50;
        return el;
      })}
      {/* ROAS chip */}
      <g transform="translate(0,2)">
        <rect x="170" y="150" width="120" height="20" rx="10" fill="rgba(16,185,129,0.14)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
        <text x="230" y="164" textAnchor="middle" fontSize="12" fontWeight="700" fill="#10b981">23.4x ROAS</text>
      </g>
    </svg>
  );
};

// Document/article + rising readership (content-marketing / legal-services)
const Documents = (uid) => (
  <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
    <Defs uid={uid} />
    {/* document card */}
    <rect x="14" y="12" width="196" height="148" rx="13" fill={SURF} stroke={HAIR} strokeWidth="1" />
    <rect x="32" y="32" width="120" height="12" rx="6" fill={`url(#${uid}-line)`} />
    {[58, 74, 90, 106].map((yy, i) => (
      <rect key={i} x="32" y={yy} width={i % 2 ? 150 : 130} height="6" rx="3" fill="rgba(255,255,255,0.14)" />
    ))}
    <rect x="32" y="122" width="90" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
    <circle cx="176" cy="132" r="16" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
    <path d="M169,132 l5,5 l10,-11" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* rising readers chart */}
    {[54, 96, 138].map((yy) => <line key={yy} x1="236" y1={yy} x2="446" y2={yy} stroke={GRID} strokeWidth="1" />)}
    <path d="M236,132 C270,126 288,104 320,102 S372,78 400,64 S434,44 446,34 L446,150 L236,150 Z" fill={`url(#${uid}-area)`} />
    <path d="M236,132 C270,126 288,104 320,102 S372,78 400,64 S434,44 446,34" fill="none" stroke={`url(#${uid}-line)`} strokeWidth="3" strokeLinecap="round" />
    <circle cx="446" cy="34" r="5" fill="#fff" />
  </svg>
);

// Heartbeat / ECG line + appointment ticks (healthcare)
const Pulse = (uid) => (
  <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
    <Defs uid={uid} />
    {gridlines()}
    <path
      d="M14,92 L120,92 L138,92 L150,54 L166,128 L182,72 L196,92 L300,92 L316,92 L328,64 L342,118 L356,92 L446,92"
      fill="none" stroke={`url(#${uid}-line)`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="166" cy="128" r="5" fill="#fff" />
    <circle cx="166" cy="128" r="10" fill="#c026d3" opacity="0.25" className="ha-glow" />
    {/* appointment ticks */}
    {[40, 96, 152, 208].map((x, i) => (
      <g key={i} transform={`translate(${x},146)`}>
        <rect x="0" y="0" width="34" height="14" rx="4" fill={SURF} stroke={HAIR} strokeWidth="1" />
        <rect x="6" y="5" width="22" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
      </g>
    ))}
    <rect x="360" y="146" width="86" height="14" rx="7" fill="rgba(16,185,129,0.14)" />
    <text x="403" y="156" textAnchor="middle" fontSize="10" fontWeight="700" fill="#10b981">+180% PATIENTS</text>
  </svg>
);

// Bar chart + trend line (ecommerce / restaurant / education / fashion)
const Bars = (uid) => {
  const heights = [44, 62, 54, 84, 100, 122];
  const barW = 44, gap = 24, x0 = 22, base = 150;
  const pts = heights.map((h, i) => [x0 + i * (barW + gap) + barW / 2, base - h]);
  return (
    <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg">
      <Defs uid={uid} />
      <line x1="14" y1={base} x2="446" y2={base} stroke={HAIR} strokeWidth="1" />
      {heights.map((h, i) => (
        <rect key={i} x={x0 + i * (barW + gap)} y={base - h} width={barW} height={h} rx="7"
          fill={`url(#${uid}-bar)`} opacity={i === heights.length - 1 ? 1 : 0.85} />
      ))}
      <polyline points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke={`url(#${uid}-cyan)`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([px, py], i) => <circle key={i} cx={px} cy={py} r="3" fill="#0f0a1e" stroke="#22d3ee" strokeWidth="1.5" />)}
      <path d={`M${pts[5][0] - 8},${pts[5][1] - 10} l8,-8 l8,8`} fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const VISUALS = {
  area: Area,
  rankList: RankList,
  gauge: Gauge,
  mapPins: MapPins,
  feed: Feed,
  funnel: Funnel,
  documents: Documents,
  pulse: Pulse,
  bars: Bars,
};

/* ---------- per-page configs ---------- */

const VARIANTS = {
  home: {
    title: 'Live Performance Tracking', badge: 'Active', visual: 'area',
    metrics: [{ label: 'Organic Traffic', value: '+150%', tone: 'grad' }, { label: 'Conversions', value: '+280%', tone: 'success' }],
  },
  seo: {
    title: 'SEO Rank Tracker', badge: 'Live', visual: 'rankList',
    metrics: [{ label: 'Keywords Ranked', value: '64+', tone: 'grad' }, { label: 'Organic Traffic', value: '+150%', tone: 'success' }],
  },
  'website-development': {
    title: 'Site Performance', badge: 'Live', visual: 'gauge',
    metrics: [{ label: 'Load Time', value: '0.8s', tone: 'grad' }, { label: 'Conversions', value: '+3x', tone: 'success' }],
  },
  gmb: {
    title: 'Business Profile', badge: 'Verified', visual: 'mapPins',
    metrics: [{ label: 'Map Views', value: '12.4K', tone: 'grad' }, { label: 'Calls', value: '+3x', tone: 'success' }],
  },
  'content-marketing': {
    title: 'Content Engine', badge: 'Publishing', visual: 'documents',
    metrics: [{ label: 'Monthly Readers', value: '48K', tone: 'grad' }, { label: 'Engagement', value: '+72%', tone: 'success' }],
  },
  'social-media-marketing': {
    title: 'Social Dashboard', badge: 'Live', visual: 'feed',
    metrics: [{ label: 'Reach', value: '1.2M', tone: 'grad' }, { label: 'Engagement', value: '+64%', tone: 'success' }],
  },
  'google-ads': {
    title: 'Ad Campaign', badge: 'Optimizing', visual: 'funnel',
    metrics: [{ label: 'ROAS', value: '23.4x', tone: 'grad' }, { label: 'Conversions', value: '+280%', tone: 'success' }],
  },
  healthcare: {
    title: 'Patient Growth', badge: 'Live', visual: 'pulse',
    metrics: [{ label: 'New Patients', value: '+180%', tone: 'grad' }, { label: 'Bookings', value: '3x', tone: 'success' }],
  },
  restaurant: {
    title: 'Reservations', badge: 'Live', visual: 'bars',
    metrics: [{ label: 'Bookings', value: '+150%', tone: 'grad' }, { label: 'Rating', value: '4.9★', tone: 'success' }],
  },
  'real-estate': {
    title: 'Property Leads', badge: 'Live', visual: 'mapPins',
    metrics: [{ label: 'Listings Viewed', value: '18K', tone: 'grad' }, { label: 'Leads', value: '+210%', tone: 'success' }],
  },
  ecommerce: {
    title: 'Store Revenue', badge: 'Live', visual: 'bars',
    metrics: [{ label: 'ROAS', value: '23.4x', tone: 'grad' }, { label: 'Sales', value: '+240%', tone: 'success' }],
  },
  'local-service': {
    title: 'Service Area', badge: 'Live', visual: 'mapPins',
    metrics: [{ label: 'Calls', value: '+3x', tone: 'grad' }, { label: 'Bookings', value: '+160%', tone: 'success' }],
  },
  'legal-services': {
    title: 'Case Pipeline', badge: 'Live', visual: 'documents',
    metrics: [{ label: 'Qualified Leads', value: '+190%', tone: 'grad' }, { label: 'Consults', value: '2x', tone: 'success' }],
  },
  education: {
    title: 'Enrollments', badge: 'Live', visual: 'bars',
    metrics: [{ label: 'Enrollments', value: '+170%', tone: 'grad' }, { label: 'Leads', value: '3x', tone: 'success' }],
  },
  fashion: {
    title: 'Brand Growth', badge: 'Live', visual: 'bars',
    metrics: [{ label: 'Reach', value: '1.2M', tone: 'grad' }, { label: 'Sales', value: '+220%', tone: 'success' }],
  },
};

const HeroArt = ({ variant = 'home' }) => {
  const cfg = VARIANTS[variant] || VARIANTS.home;
  const uid = `ha-${variant}`;
  const renderVisual = VISUALS[cfg.visual] || Area;

  return (
    <div className="hero-dashboard-card hero-art-card">
      <div className="dashboard-header">
        <div className="dashboard-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="dashboard-title">{cfg.title}</div>
        <div className="dashboard-badge">
          <span className="ha-live-dot"></span>
          {cfg.badge}
        </div>
      </div>
      <div className="dashboard-body">
        <div className="dashboard-stat-row">
          {cfg.metrics.map((m, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-label">{m.label}</span>
              <span className={`stat-value ${m.tone === 'success' ? 'success' : 'text-gradient'}`}>{m.value}</span>
            </div>
          ))}
        </div>
        <div className="hero-art-visual">{renderVisual(uid)}</div>
      </div>
    </div>
  );
};

export default HeroArt;
