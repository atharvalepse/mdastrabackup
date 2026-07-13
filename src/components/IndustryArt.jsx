'use client'
import './IndustryArt.css';

/**
 * IndustryArt — premium, dimensional hero illustrations, one distinct scene per
 * industry. Built as extruded "2.5D" vector art: every hero object has real
 * depth (a darker side/base face), a glossy top-light highlight and a soft
 * colored contact shadow, sitting on a lit stage with orbiting particles and
 * floating UI chips. Shared palette + composition grammar keep the set
 * cohesive; motion gives it life. Designed to glow on the dark hero.
 *
 * Usage: <IndustryArt variant="healthcare" />
 */

const VB = '0 0 500 420';
const CX = 250;
const CY = 188;

/* ---------------- shared defs ---------------- */
const Defs = ({ uid }) => (
  <defs>
    {/* bright object face */}
    <linearGradient id={`${uid}-face`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#c9a2ff" />
      <stop offset="48%" stopColor="#a855f7" />
      <stop offset="100%" stopColor="#9333ea" />
    </linearGradient>
    {/* lighter accent face (roofs, top faces) */}
    <linearGradient id={`${uid}-faceL`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#e9d5ff" />
      <stop offset="100%" stopColor="#c084fc" />
    </linearGradient>
    {/* deep extruded side */}
    <linearGradient id={`${uid}-side`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#7e22ce" />
      <stop offset="100%" stopColor="#4c1d95" />
    </linearGradient>
    {/* magenta accent */}
    <linearGradient id={`${uid}-mag`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#e879f9" />
      <stop offset="100%" stopColor="#c026d3" />
    </linearGradient>
    {/* white UI card */}
    <linearGradient id={`${uid}-card`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="100%" stopColor="#f1e9ff" />
    </linearGradient>
    <linearGradient id={`${uid}-cardSide`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#d9cbf3" />
      <stop offset="100%" stopColor="#b7a4e0" />
    </linearGradient>
    {/* soft radial glow / spotlight / gloss */}
    <radialGradient id={`${uid}-glow`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.55" />
      <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.14" />
      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
    </radialGradient>
    <radialGradient id={`${uid}-gloss`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
    </radialGradient>
    <radialGradient id={`${uid}-floor`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#1a0b33" stopOpacity="0.6" />
      <stop offset="100%" stopColor="#1a0b33" stopOpacity="0" />
    </radialGradient>
    <filter id={`${uid}-sh`} x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#1a0838" floodOpacity="0.55" />
    </filter>
    <filter id={`${uid}-shs`} x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1a0838" floodOpacity="0.4" />
    </filter>
  </defs>
);

const Stage = ({ uid }) => (
  <>
    <circle cx={CX} cy={CY} r="205" fill={`url(#${uid}-glow)`} className="ia-pulse" />
    <ellipse cx={CX} cy="330" rx="150" ry="30" fill={`url(#${uid}-floor)`} />
    <ellipse cx={CX} cy="322" rx="120" ry="20" fill="#3b0764" opacity="0.45" />
  </>
);

/* orbiting ambient particles for "life" */
const Orbit = ({ uid }) => (
  <g className="ia-orbit" style={{ transformBox: 'view-box', transformOrigin: `${CX}px ${CY}px` }}>
    <circle cx={CX + 168} cy={CY - 30} r="5" fill="#22d3ee" opacity="0.9" />
    <circle cx={CX - 176} cy={CY + 40} r="6" fill="#e879f9" opacity="0.9" />
    <circle cx={CX + 150} cy={CY + 90} r="4" fill="#fbbf24" opacity="0.85" />
    <circle cx={CX - 150} cy={CY - 70} r="3.5" fill="#ffffff" opacity="0.7" />
    <circle cx={CX + 40} cy={CY - 150} r="4" fill="#a855f7" opacity="0.9" />
  </g>
);

/* ---------------- primitives ---------------- */

// extruded shape from a path: dark base offset down, bright face on top
const Extrude = ({ uid, d, depth = 12, grad, tx = 0, ty = 0 }) => (
  <g transform={`translate(${tx},${ty})`}>
    <path d={d} transform={`translate(0,${depth})`} fill={`url(#${uid}-side)`} />
    <path d={d} fill={grad || `url(#${uid}-face)`} filter={`url(#${uid}-sh)`} />
  </g>
);

// glossy highlight blob
const Gloss = ({ cx, cy, rx, ry, uid, o = 1 }) => (
  <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={`url(#${uid}-gloss)`} opacity={o} />
);

// floating white UI chip with 3D base
const Card = ({ uid, x, y, w, h, r = 16, depth = 7, float = 'ia-float-1', children }) => (
  <g className={float}>
    <rect x={x} y={y + depth} width={w} height={h} rx={r} fill={`url(#${uid}-cardSide)`} />
    <rect x={x} y={y} width={w} height={h} rx={r} fill={`url(#${uid}-card)`} filter={`url(#${uid}-shs)`} />
    <Gloss uid={uid} cx={x + w * 0.32} cy={y + h * 0.3} rx={w * 0.34} ry={h * 0.22} o={0.55} />
    {children}
  </g>
);

// colored metric pill with 3D base
const Pill = ({ uid, x, y, text, grad, float = 'ia-float-2', w = 100 }) => (
  <g className={float}>
    <rect x={x} y={y + 6} width={w} height={42} rx="21" fill={`url(#${uid}-side)`} />
    <rect x={x} y={y} width={w} height={42} rx="21" fill={grad || `url(#${uid}-mag)`} filter={`url(#${uid}-shs)`} />
    <Gloss uid={uid} cx={x + w * 0.4} cy={y + 13} rx={w * 0.34} ry={9} o={0.4} />
    <text x={x + w / 2} y={y + 27} textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">{text}</text>
  </g>
);

const Green = ({ uid, x, y, text, float }) => (
  <g className={float}>
    <rect x={x} y={y + 6} width="100" height="42" rx="21" fill="#047857" />
    <rect x={x} y={y} width="100" height="42" rx="21" fill="#10b981" filter={`url(#${uid}-shs)`} />
    <Gloss uid={uid} cx={x + 40} cy={y + 13} rx={34} ry={9} o={0.35} />
    <text x={x + 50} y={y + 27} textAnchor="middle" fontSize="17" fontWeight="800" fill="#fff">{text}</text>
  </g>
);

const Star = ({ cx, cy, s = 1, fill = '#fbbf24' }) => (
  <path
    transform={`translate(${cx},${cy}) scale(${s})`}
    d="M0,-10 L2.94,-4.05 L9.51,-3.09 L4.76,1.55 L5.88,8.09 L0,5 L-5.88,8.09 L-4.76,1.55 L-9.51,-3.09 L-2.94,-4.05 Z"
    fill={fill}
  />
);

const spark = (pts) => pts.map(([x, y, s], i) => (
  <g key={i} className={`ia-twinkle ia-t${(i % 3) + 1}`}>
    <path transform={`translate(${x},${y}) scale(${s})`} d="M0,-8 L1.6,-1.6 L8,0 L1.6,1.6 L0,8 L-1.6,1.6 L-8,0 L-1.6,-1.6 Z" fill="#f5e9ff" />
  </g>
));

/* ---------------- scenes ---------------- */

// HEALTHCARE — chunky 3D medical cross
const Healthcare = (uid) => {
  const cross = 'M-22,-52 h44 v30 h30 v44 h-30 v30 h-44 v-30 h-30 v-44 h30 Z';
  return (
    <>
      <g className="ia-center">
        <Extrude uid={uid} d={cross} depth={14} tx={CX} ty={CY} />
        <g transform={`translate(${CX},${CY})`}>
          <path d="M-22,-52 h44 v30 h30 v10 h-104 v-10 h30 Z" fill="#ffffff" opacity="0.22" />
          <Gloss cx={-14} cy={-30} rx={26} ry={18} uid={uid} o={0.6} />
        </g>
      </g>
      <Card uid={uid} x={54} y={132} w={122} h={62} float="ia-float-3">
        <path d="M70,163 h16 l8,-20 l11,38 l9,-26 l6,8 h30" fill="none" stroke={`url(#${uid}-mag)`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </Card>
      <Green uid={uid} x={332} y={120} text="+180%" float="ia-float-2" />
      <Card uid={uid} x={330} y={236} w={128} h={70} float="ia-float-4">
        <rect x="346" y="254" width="48" height="9" rx="4.5" fill="#c4b5fd" />
        <rect x="346" y="270" width="80" height="7" rx="3.5" fill="#ddd6fe" />
        <rect x="346" y="284" width="62" height="7" rx="3.5" fill="#ece7fb" />
        <circle cx="436" cy="278" r="15" fill="#d1fae5" />
        <path d="M429,278 l5,5 l9,-11" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </Card>
      <Card uid={uid} x={58} y={244} w={96} h={60} float="ia-float-1">
        <g transform="translate(84,274) rotate(-40)">
          <rect x="-24" y="-12" width="48" height="24" rx="12" fill={`url(#${uid}-mag)`} />
          <path d="M0,-12 a12,12 0 0 1 0,24 h24 a12,12 0 0 0 0,-24 Z" fill="#f1e9ff" />
        </g>
        <circle cx="128" cy="274" r="10" fill="none" stroke={`url(#${uid}-mag)`} strokeWidth="3.5" />
      </Card>
      {spark([[160, 96, 1], [346, 314, 0.8], [96, 110, 0.7]])}
    </>
  );
};

// RESTAURANT — 3D cloche (food dome) on a plate
const Restaurant = (uid) => (
  <>
    <g className="ia-center">
      {/* plate */}
      <ellipse cx={CX} cy="238" rx="96" ry="22" fill={`url(#${uid}-side)`} />
      <ellipse cx={CX} cy="230" rx="96" ry="22" fill={`url(#${uid}-card)`} />
      <ellipse cx={CX} cy="230" rx="64" ry="14" fill="none" stroke="#c4b5fd" strokeWidth="2" opacity="0.7" />
      {/* dome */}
      <path d={`M${CX - 78},230 a78,86 0 0 1 156,0 Z`} transform="translate(0,10)" fill={`url(#${uid}-side)`} />
      <path d={`M${CX - 78},230 a78,86 0 0 1 156,0 Z`} fill={`url(#${uid}-face)`} filter={`url(#${uid}-sh)`} />
      <path d={`M${CX - 60},226 a60,64 0 0 1 40,-58`} fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" opacity="0.5" />
      {/* knob */}
      <rect x={CX - 7} y="132" width="14" height="20" rx="6" fill={`url(#${uid}-side)`} />
      <circle cx={CX} cy="130" r="12" fill={`url(#${uid}-mag)`} />
      <Gloss cx={CX - 3} cy={126} rx={6} ry={4} uid={uid} o={0.8} />
    </g>
    <Card uid={uid} x={312} y={118} w={132} h={52} float="ia-float-2">
      <Star cx={334} cy={144} s={0.82} /><Star cx={356} cy={144} s={0.82} /><Star cx={378} cy={144} s={0.82} />
      <Star cx={400} cy={144} s={0.82} /><Star cx={422} cy={144} s={0.82} fill="#fcd34d" />
    </Card>
    <Card uid={uid} x={52} y={126} w={126} h={56} float="ia-float-3">
      <circle cx="80" cy="154" r="14" fill="#d1fae5" />
      <path d="M73,154 l5,5 l9,-11" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="104" y="146" width="60" height="8" rx="4" fill="#c4b5fd" />
      <rect x="104" y="160" width="42" height="7" rx="3.5" fill="#ddd6fe" />
    </Card>
    <Card uid={uid} x={60} y={244} w={84} h={62} float="ia-float-1">
      <path d="M90,292 h28 v-18 a17,17 0 1 0 -9,-30 a14,14 0 0 0 -22,0 a17,17 0 1 0 -9,30 Z" fill={`url(#${uid}-face)`} />
      <rect x="90" y="288" width="28" height="6" rx="3" fill="#f1e9ff" />
    </Card>
    <Pill uid={uid} x={330} y={244} text="+150%" float="ia-float-4" />
    {spark([[158, 100, 0.9], [352, 312, 0.8]])}
  </>
);

// REAL ESTATE — 3D house
const RealEstate = (uid) => (
  <>
    <g className="ia-center">
      {/* right side wall (depth) */}
      <path d="M292,196 L322,178 L322,264 L292,282 Z" fill={`url(#${uid}-side)`} />
      {/* front wall */}
      <rect x="182" y="196" width="110" height="86" rx="6" fill={`url(#${uid}-face)`} filter={`url(#${uid}-sh)`} />
      {/* roof */}
      <path d="M170,200 L237,150 L304,200 Z" fill={`url(#${uid}-faceL)`} />
      <path d="M304,200 L237,150 L262,138 L322,182 Z" fill={`url(#${uid}-side)`} />
      {/* windows + door */}
      <rect x="200" y="214" width="26" height="26" rx="4" fill="#fef9c3" />
      <rect x="200" y="214" width="26" height="26" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
      <rect x="248" y="214" width="26" height="26" rx="4" fill="#fef9c3" />
      <rect x="248" y="214" width="26" height="26" rx="4" fill="none" stroke="#fff" strokeWidth="2" />
      <rect x="222" y="250" width="30" height="32" rx="4" fill={`url(#${uid}-side)`} />
      <circle cx="246" cy="266" r="2.5" fill="#fbbf24" />
      <Gloss cx={210} cy={210} rx={30} ry={20} uid={uid} o={0.4} />
    </g>
    <Card uid={uid} x={318} y={112} w={70} h={78} float="ia-float-2">
      <path d="M353,128 c-14,0 -24,11 -24,24 c0,16 24,36 24,36 c0,0 24,-20 24,-36 c0,-13 -10,-24 -24,-24 Z" fill={`url(#${uid}-mag)`} />
      <circle cx="353" cy="152" r="9" fill="#fff" />
    </Card>
    <Card uid={uid} x={50} y={128} w={122} h={50} float="ia-float-3">
      <rect x="66" y="145" width="16" height="16" rx="3" fill={`url(#${uid}-face)`} />
      <rect x="94" y="146" width="62" height="8" rx="4" fill="#c4b5fd" />
      <rect x="94" y="159" width="44" height="7" rx="3.5" fill="#ddd6fe" />
    </Card>
    <Green uid={uid} x={330} y={246} text="+210%" float="ia-float-4" />
    <Card uid={uid} x={58} y={244} w={86} h={60} float="ia-float-1">
      <circle cx="86" cy="274" r="12" fill="none" stroke={`url(#${uid}-face)`} strokeWidth="4.5" />
      <path d="M97,274 h34 M124,274 v10 M132,274 v10" fill="none" stroke={`url(#${uid}-face)`} strokeWidth="4.5" strokeLinecap="round" />
    </Card>
    {spark([[156, 98, 0.9], [352, 312, 0.8]])}
  </>
);

// ECOMMERCE — 3D shopping bag
const Ecommerce = (uid) => (
  <>
    <g className="ia-center">
      <path d="M188,176 h124 l12,104 a10,10 0 0 1 -10,11 h-128 a10,10 0 0 1 -10,-11 Z" transform="translate(6,10)" fill={`url(#${uid}-side)`} />
      <path d="M188,176 h124 l12,104 a10,10 0 0 1 -10,11 h-128 a10,10 0 0 1 -10,-11 Z" fill={`url(#${uid}-face)`} filter={`url(#${uid}-sh)`} />
      <ellipse cx={CX} cy="176" rx="62" ry="12" fill={`url(#${uid}-side)`} />
      <path d="M214,178 v-16 a36,36 0 0 1 72,0 v16" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity="0.9" />
      <circle cx={CX} cy="216" r="17" fill="none" stroke="#fff" strokeWidth="4.5" opacity="0.85" />
      <path d="M235,216 a15,15 0 0 0 30,0" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85" />
      <Gloss cx={214} cy={210} rx={26} ry={40} uid={uid} o={0.35} />
    </g>
    <Card uid={uid} x={50} y={124} w={116} h={72} float="ia-float-3">
      <rect x="64" y="138" width="44" height="44" rx="9" fill={`url(#${uid}-face)`} />
      <path d="M74,160 l8,8 l16,-18" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <rect x="118" y="144" width="36" height="8" rx="4" fill="#c4b5fd" />
      <rect x="118" y="158" width="28" height="7" rx="3.5" fill="#ddd6fe" />
      <rect x="118" y="171" width="32" height="7" rx="3.5" fill="#a78bfa" />
    </Card>
    <Green uid={uid} x={332} y={118} text="+240%" float="ia-float-2" />
    <Card uid={uid} x={320} y={238} w={126} h={52} float="ia-float-4">
      <Star cx={344} cy={264} s={0.74} /><Star cx={364} cy={264} s={0.74} /><Star cx={384} cy={264} s={0.74} />
      <Star cx={404} cy={264} s={0.74} /><Star cx={424} cy={264} s={0.74} fill="#fcd34d" />
    </Card>
    <Card uid={uid} x={58} y={244} w={90} h={60} float="ia-float-1">
      <path d="M72,262 h9 l7,28 h24 l7,-20 h-33" fill="none" stroke={`url(#${uid}-face)`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="92" cy="298" r="4" fill={`url(#${uid}-face)`} />
      <circle cx="110" cy="298" r="4" fill={`url(#${uid}-face)`} />
      <circle cx="126" cy="256" r="10" fill="#ec4899" />
      <text x="126" y="260" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff">3</text>
    </Card>
    {spark([[158, 96, 0.9], [348, 314, 0.8]])}
  </>
);

// LOCAL SERVICE — 3D map pin on iso map tiles
const LocalService = (uid) => (
  <>
    <g className="ia-center">
      {/* iso map tiles */}
      <g opacity="0.9">
        <path d="M250,296 L318,262 L250,228 L182,262 Z" fill={`url(#${uid}-side)`} />
        <path d="M250,288 L312,258 L250,228 L188,258 Z" fill="#ede9fe" />
        <path d="M215,258 L250,240 L285,258 L250,276 Z" fill="#c4b5fd" opacity="0.7" />
        <path d="M250,240 L250,276" stroke="#a78bfa" strokeWidth="2" opacity="0.5" />
      </g>
      {/* pin */}
      <path d="M250,120 c-32,0 -56,24 -56,56 c0,40 56,86 56,86 c0,0 56,-46 56,-86 c0,-32 -24,-56 -56,-56 Z" transform="translate(4,8)" fill={`url(#${uid}-side)`} />
      <path d="M250,120 c-32,0 -56,24 -56,56 c0,40 56,86 56,86 c0,0 56,-46 56,-86 c0,-32 -24,-56 -56,-56 Z" fill={`url(#${uid}-mag)`} filter={`url(#${uid}-sh)`} />
      <path d="M250,120 c-32,0 -56,24 -56,56 c0,3 0.4,7 1,10 c8,-28 30,-44 55,-44 c25,0 47,16 55,44 c0.6,-3 1,-7 1,-10 c0,-32 -24,-56 -56,-56 Z" fill="#ffffff" opacity="0.28" />
      <circle cx="250" cy="174" r="24" fill="#fff" />
      <path d="M242,184 l14,-14 a10,10 0 1 0 -10,-10 l-14,14 a10,10 0 1 0 10,10 Z" fill={`url(#${uid}-face)`} />
    </g>
    <Card uid={uid} x={52} y={128} w={126} h={54} float="ia-float-3">
      <path d="M74,146 c-4,0 -6,3 -6,7 c0,17 15,32 32,32 c4,0 7,-2 7,-6 l-1,-9 c0,-3 -3,-5 -6,-4 l-7,2 c-5,-3 -9,-7 -12,-12 l2,-7 c1,-3 -1,-6 -4,-6 Z" fill={`url(#${uid}-face)`} />
      <rect x="118" y="146" width="50" height="8" rx="4" fill="#c4b5fd" />
      <rect x="118" y="160" width="36" height="7" rx="3.5" fill="#ddd6fe" />
    </Card>
    <Green uid={uid} x={330} y={120} text="+160%" float="ia-float-2" />
    <Card uid={uid} x={330} y={240} w={120} h={66} float="ia-float-4">
      <rect x="346" y="256" width="88" height="40" rx="8" fill="#ede9fe" />
      <rect x="346" y="256" width="88" height="15" rx="8" fill={`url(#${uid}-face)`} />
      <circle cx="364" cy="282" r="4.5" fill="#a78bfa" /><circle cx="382" cy="282" r="4.5" fill="#a78bfa" />
      <circle cx="400" cy="282" r="4.5" fill="#10b981" /><circle cx="418" cy="282" r="4.5" fill="#ddd6fe" />
    </Card>
    <Card uid={uid} x={60} y={246} w={84} h={58} float="ia-float-1">
      <circle cx="90" cy="275" r="13" fill="none" stroke={`url(#${uid}-face)`} strokeWidth="4.5" />
      <circle cx="90" cy="275" r="4" fill={`url(#${uid}-face)`} />
      <path d="M90,256 v-6 M90,300 v-6 M109,275 h6 M65,275 h6" stroke={`url(#${uid}-face)`} strokeWidth="4.5" strokeLinecap="round" />
    </Card>
    {spark([[158, 104, 0.9], [352, 314, 0.8]])}
  </>
);

// LEGAL — 3D scales of justice
const LegalServices = (uid) => (
  <>
    <g className="ia-center">
      {/* pedestal */}
      <ellipse cx="250" cy="286" rx="52" ry="14" fill={`url(#${uid}-side)`} />
      <rect x="234" y="150" width="32" height="128" rx="8" fill={`url(#${uid}-side)`} />
      <rect x="228" y="150" width="24" height="128" rx="8" fill={`url(#${uid}-face)`} />
      <path d="M198,270 h104 v10 a10,10 0 0 1 -10,10 h-84 a10,10 0 0 1 -10,-10 Z" fill={`url(#${uid}-mag)`} />
      {/* beam */}
      <rect x="150" y="150" width="180" height="9" rx="4.5" fill={`url(#${uid}-face)`} />
      <circle cx="240" cy="146" r="10" fill={`url(#${uid}-mag)`} />
      {/* pans */}
      <line x1="162" y1="156" x2="162" y2="152" stroke="#ede9fe" strokeWidth="2" />
      <path d="M136,200 l26,-46 l26,46 Z" fill="none" stroke="#c4b5fd" strokeWidth="2" opacity="0.6" />
      <path d="M134,198 a28,11 0 0 0 56,0 Z" fill={`url(#${uid}-face)`} />
      <path d="M134,198 a28,7 0 0 0 56,0" fill={`url(#${uid}-mag)`} opacity="0.9" />
      <path d="M318,200 l-26,-46 l-26,46 Z" fill="none" stroke="#c4b5fd" strokeWidth="2" opacity="0.6" />
      <path d="M292,198 a28,11 0 0 0 56,0 Z" fill={`url(#${uid}-face)`} />
      <path d="M292,198 a28,7 0 0 0 56,0" fill={`url(#${uid}-mag)`} opacity="0.9" />
      <Gloss cx={238} cy={190} rx={10} ry={40} uid={uid} o={0.4} />
    </g>
    <Card uid={uid} x={50} y={124} w={108} h={74} float="ia-float-3">
      <rect x="68" y="140" width="44" height="8" rx="4" fill={`url(#${uid}-face)`} />
      <rect x="68" y="155" width="70" height="7" rx="3.5" fill="#ddd6fe" />
      <rect x="68" y="168" width="60" height="7" rx="3.5" fill="#ece7fb" />
      <rect x="68" y="181" width="48" height="7" rx="3.5" fill="#ece7fb" />
    </Card>
    <Green uid={uid} x={334} y={120} text="+190%" float="ia-float-2" />
    <Card uid={uid} x={330} y={238} w={120} h={64} float="ia-float-4">
      <g transform="translate(392,268) rotate(35)">
        <rect x="-26" y="-10" width="38" height="20" rx="6" fill={`url(#${uid}-face)`} />
        <rect x="10" y="-5" width="22" height="10" rx="5" fill={`url(#${uid}-mag)`} />
      </g>
      <rect x="348" y="288" width="42" height="8" rx="4" fill="#c4b5fd" />
    </Card>
    <Card uid={uid} x={58} y={244} w={82} h={60} float="ia-float-1">
      <path d="M99,250 l19,7 v15 c0,15 -19,24 -19,24 c0,0 -19,-9 -19,-24 v-15 Z" fill={`url(#${uid}-face)`} />
      <path d="M91,274 l6,6 l11,-13" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Card>
    {spark([[158, 100, 0.9], [352, 312, 0.8]])}
  </>
);

// EDUCATION — 3D graduation cap on book stack
const Education = (uid) => (
  <>
    <g className="ia-center">
      {/* book stack */}
      <g>
        <rect x="186" y="252" width="128" height="20" rx="5" fill={`url(#${uid}-side)`} />
        <rect x="186" y="246" width="128" height="18" rx="5" fill={`url(#${uid}-mag)`} />
        <rect x="196" y="230" width="112" height="18" rx="5" fill={`url(#${uid}-side)`} />
        <rect x="196" y="226" width="112" height="16" rx="5" fill={`url(#${uid}-faceL)`} />
        <rect x="204" y="212" width="96" height="16" rx="5" fill={`url(#${uid}-side)`} />
        <rect x="204" y="209" width="96" height="14" rx="5" fill={`url(#${uid}-face)`} />
      </g>
      {/* cap */}
      <path d="M250,206 L246,206 L200,186 L250,166 L300,186 Z" fill={`url(#${uid}-side)`} transform="translate(0,6)" />
      <path d="M250,164 L316,190 L250,216 L184,190 Z" fill={`url(#${uid}-face)`} filter={`url(#${uid}-sh)`} />
      <path d="M250,164 L316,190 L250,216 L184,190 Z" fill={`url(#${uid}-gloss)`} opacity="0.18" />
      <path d="M216,203 v20 c0,11 68,11 68,0 v-20" fill={`url(#${uid}-mag)`} />
      <line x1="316" y1="190" x2="320" y2="224" stroke="#fbbf24" strokeWidth="3" />
      <circle cx="320" cy="228" r="6" fill="#fbbf24" />
    </g>
    <Card uid={uid} x={50} y={124} w={116} h={64} float="ia-float-3">
      <circle cx="80" cy="156" r="19" fill={`url(#${uid}-face)`} />
      <path d="M74,148 l13,8 l-13,8 Z" fill="#fff" />
      <rect x="108" y="146" width="48" height="8" rx="4" fill="#c4b5fd" />
      <rect x="108" y="160" width="36" height="7" rx="3.5" fill="#ddd6fe" />
    </Card>
    <Green uid={uid} x={334} y={120} text="+170%" float="ia-float-2" />
    <Card uid={uid} x={330} y={238} w={122} h={66} float="ia-float-4">
      <rect x="346" y="252" width="72" height="46" rx="6" fill="#ede9fe" />
      <rect x="356" y="262" width="48" height="6" rx="3" fill="#c4b5fd" />
      <rect x="356" y="273" width="56" height="6" rx="3" fill="#ddd6fe" />
      <circle cx="430" cy="278" r="14" fill={`url(#${uid}-mag)`} />
      <path d="M430,292 l-6,12 l6,-4 l6,4 Z" fill="#fbbf24" />
    </Card>
    <Card uid={uid} x={60} y={244} w={82} h={60} float="ia-float-1">
      <g transform="translate(102,274) rotate(45)">
        <rect x="-8" y="-24" width="16" height="38" rx="3" fill={`url(#${uid}-face)`} />
        <path d="M-8,14 l8,13 l8,-13 Z" fill="#fbbf24" />
        <rect x="-8" y="-24" width="16" height="8" rx="3" fill={`url(#${uid}-side)`} />
      </g>
    </Card>
    {spark([[158, 98, 0.9], [352, 314, 0.8]])}
  </>
);

// FASHION — 3D boutique bag with bow + tag
const Fashion = (uid) => (
  <>
    <g className="ia-center">
      <path d="M192,186 h116 l10,94 a10,10 0 0 1 -10,11 h-116 a10,10 0 0 1 -10,-11 Z" transform="translate(6,10)" fill={`url(#${uid}-side)`} />
      <path d="M192,186 h116 l10,94 a10,10 0 0 1 -10,11 h-116 a10,10 0 0 1 -10,-11 Z" fill={`url(#${uid}-mag)`} filter={`url(#${uid}-sh)`} />
      <ellipse cx={CX} cy="186" rx="58" ry="11" fill={`url(#${uid}-side)`} />
      {/* ribbon handles */}
      <path d="M216,188 C214,150 236,140 250,158 C264,140 286,150 284,188" fill="none" stroke="#f9a8d4" strokeWidth="6" strokeLinecap="round" />
      {/* bow */}
      <path d="M250,158 l-18,-12 v24 Z" fill="#f472b6" />
      <path d="M250,158 l18,-12 v24 Z" fill="#ec4899" />
      <circle cx="250" cy="158" r="6" fill="#fbcfe8" />
      <Gloss cx={218} cy={224} rx={24} ry={40} uid={uid} o={0.35} />
    </g>
    <Card uid={uid} x={310} y={116} w={74} h={58} float="ia-float-2">
      <path d="M326,132 h24 l18,18 l-24,24 l-18,-18 v-24 Z" fill={`url(#${uid}-face)`} />
      <circle cx="336" cy="142" r="4.5" fill="#fff" />
    </Card>
    <Card uid={uid} x={54} y={126} w={120} h={52} float="ia-float-3">
      <path d="M80,148 c-5,-6 -15,-2 -15,6 c0,7 9,13 15,17 c6,-4 15,-10 15,-17 c0,-8 -10,-12 -15,-6 Z" fill="#ec4899" />
      <rect x="106" y="146" width="56" height="8" rx="4" fill="#c4b5fd" />
      <rect x="106" y="160" width="40" height="7" rx="3.5" fill="#ddd6fe" />
    </Card>
    <Green uid={uid} x={332} y={244} text="+220%" float="ia-float-4" />
    <Card uid={uid} x={54} y={244} w={116} h={50} float="ia-float-1">
      <Star cx={78} cy={269} s={0.68} /><Star cx={97} cy={269} s={0.68} /><Star cx={116} cy={269} s={0.68} />
      <Star cx={135} cy={269} s={0.68} /><Star cx={154} cy={269} s={0.68} fill="#fcd34d" />
    </Card>
    {spark([[160, 98, 0.9], [346, 312, 0.8], [304, 196, 0.6]])}
  </>
);

const SCENES = {
  healthcare: Healthcare,
  restaurant: Restaurant,
  'real-estate': RealEstate,
  ecommerce: Ecommerce,
  'local-service': LocalService,
  'legal-services': LegalServices,
  education: Education,
  fashion: Fashion,
};

const IndustryArt = ({ variant = 'healthcare' }) => {
  const uid = `ia-${variant}`;
  const Scene = SCENES[variant] || Healthcare;
  return (
    <div className="industry-art">
      <svg viewBox={VB} width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${variant} illustration`}>
        <Defs uid={uid} />
        <Stage uid={uid} />
        <Orbit uid={uid} />
        {Scene(uid)}
      </svg>
    </div>
  );
};

export default IndustryArt;
