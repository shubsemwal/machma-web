import { useEffect, useRef, useState } from "react";
import "./MachmaAbout.css";

const stats = [
  {
    value: "13th",
    label: "Edition",
    sub: "Marking 12 years of industrial excellence",
    highlight: false,
  },
  {
    value: "650+",
    label: "Exhibitors",
    sub: "Leading companies from India and abroad",
    highlight: true,
  },
  {
    value: "50,000+",
    label: "Visitors",
    sub: "Professionals and decision-makers across industries",
    highlight: false,
  },
  {
    value: "3.35L",
    label: "Sq. Ft.",
    sub: "A grand stage for innovation",
    highlight: false,
    hasPhoto: true,
  },
  {
    value: "10,000+",
    label: "Products",
    sub: "Live demos and cutting-edge solutions",
    highlight: true,
  },
];

// Decorative punjab map lines (radiating from Ludhiana)
const rays = [
  { x2: 220, y2: 30 },
  { x2: 310, y2: 20 },
  { x2: 390, y2: 55 },
  { x2: 430, y2: 130 },
  { x2: 410, y2: 220 },
  { x2: 340, y2: 310 },
  { x2: 230, y2: 330 },
  { x2: 130, y2: 290 },
  { x2: 60,  y2: 200 },
  { x2: 50,  y2: 100 },
  { x2: 110, y2: 40  },
];

export default function MachmaAbout({ exhibitionPhoto = null }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`ma-section ${visible ? "ma-section--visible" : ""}`}
      ref={sectionRef}
    >
      {/* ── Background decorative elements ── */}
      <div className="ma-bg-stripe ma-bg-stripe--1" />
      <div className="ma-bg-stripe ma-bg-stripe--2" />
      <div className="ma-bg-dots" />

      <div className="ma-inner">

        {/* ══ LEFT – Punjab Map ══ */}
        <div className="ma-map-col">
          <div className="ma-map-wrap">

            {/* Pulse ring around Ludhiana dot */}
            <div className="ma-pulse-ring" />

            <svg
              className="ma-punjab-svg"
              viewBox="0 0 480 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ── Punjab outline (simplified accurate path) ── */}
              <path
                className="punjab-outline"
                d="
                  M 140 30
                  L 200 18
                  L 270 10
                  L 340 22
                  L 400 55
                  L 435 100
                  L 445 155
                  L 438 210
                  L 420 255
                  L 390 295
                  L 355 325
                  L 310 345
                  L 265 355
                  L 215 348
                  L 170 330
                  L 130 300
                  L 95 265
                  L 68 220
                  L 52 170
                  L 50 120
                  L 68 75
                  L 100 45
                  Z
                "
              />

              {/* Dot-grid texture inside map */}
              <defs>
                <pattern id="dotGrid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="rgba(200,21,27,0.22)" />
                </pattern>
                <clipPath id="punjabClip">
                  <path d="M140 30 L200 18 L270 10 L340 22 L400 55 L435 100 L445 155 L438 210 L420 255 L390 295 L355 325 L310 345 L265 355 L215 348 L170 330 L130 300 L95 265 L68 220 L52 170 L50 120 L68 75 L100 45 Z" />
                </clipPath>
                <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(200,21,27,0.08)" />
                  <stop offset="100%" stopColor="rgba(200,21,27,0)" />
                </radialGradient>
              </defs>

              {/* Dot fill */}
              <rect
                width="480" height="420"
                fill="url(#dotGrid)"
                clipPath="url(#punjabClip)"
              />
              {/* Glow fill */}
              <ellipse cx="245" cy="195" rx="200" ry="180"
                fill="url(#mapGlow)"
                clipPath="url(#punjabClip)"
              />

              {/* Radiating lines from Ludhiana (247, 185) */}
              {rays.map((r, i) => (
                <line
                  key={i}
                  className="map-ray"
                  x1="247" y1="185"
                  x2={r.x2} y2={r.y2}
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              ))}

              {/* Ludhiana dot */}
              <circle cx="247" cy="185" r="8" fill="#c8151b" opacity="0.25" />
              <circle cx="247" cy="185" r="5" fill="#c8151b" opacity="0.55" />
              <circle cx="247" cy="185" r="3" fill="#c8151b" />

              {/* Ludhiana label */}
              <rect x="256" y="172" width="88" height="22" rx="4" fill="#1a0505" />
              <text x="300" y="187" textAnchor="middle" fontSize="11" fontWeight="700"
                fontFamily="'Barlow Condensed', sans-serif" fill="white" letterSpacing="1">
                LUDHIANA
              </text>

              {/* Other city dots */}
              {[
                { x: 310, y: 80,  name: "Amritsar"  },
                { x: 380, y: 145, name: "Jalandhar" },
                { x: 155, y: 260, name: "Patiala"   },
                { x: 340, y: 295, name: "Bathinda"  },
              ].map((city) => (
                <g key={city.name}>
                  <circle cx={city.x} cy={city.y} r="3.5" fill="#1a0505" opacity="0.5" />
                  <text x={city.x + 8} y={city.y + 4} fontSize="9" fill="#555"
                    fontFamily="'Barlow', sans-serif" fontWeight="500">
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* PUNJAB label */}
            <div className="ma-map-label">PUNJAB</div>
          </div>
        </div>

        {/* ══ RIGHT – Content ══ */}
        <div className="ma-content-col">

          {/* Heading */}
          <div className="ma-heading-wrap">
            <span className="ma-eyebrow">13TH EDITION · DECEMBER 2026</span>
            <h2 className="ma-heading">
              The <em>13th Edition</em> of{" "}
              <span className="ma-heading--accent">India's Largest</span>
              <br />
              Machine Tools &amp; Automation Expo
            </h2>
            <div className="ma-heading-line" />
          </div>

          {/* Description */}
          <div className="ma-desc-grid">
            <p className="ma-desc">
              In December 2026, <strong>MACHMA Expo</strong> returns with its{" "}
              <strong>13th edition</strong>, reaffirming its position as North
              India's biggest machine tools and automation technology exhibition.
              For over 12 successful years, MACHMA has been the platform of
              choice for <strong>500+ global exhibitors</strong>.
            </p>
            <p className="ma-desc">
              <strong>50,000+</strong> trade professionals and{" "}
              <strong>10,000+</strong> innovative solutions. The upcoming edition
              promises to be grander, sharper, and future‑focused — setting new
              benchmarks in scale, innovation, and industrial impact.
            </p>
          </div>

          {/* Stats grid */}
          <div className="ma-stats-grid">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`ma-stat-card ${s.highlight ? "ma-stat-card--red" : ""} ${s.hasPhoto ? "ma-stat-card--photo" : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                {s.hasPhoto && exhibitionPhoto && (
                  <img
                    src={exhibitionPhoto}
                    alt="Exhibition"
                    className="ma-stat-bg-photo"
                  />
                )}
                <div className="ma-stat-inner">
                  <strong className="ma-stat-value">{s.value}</strong>
                  <span className="ma-stat-label">{s.label}</span>
                  <p className="ma-stat-sub">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}