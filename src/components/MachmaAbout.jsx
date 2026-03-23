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
      <div className="india-map-wrapper">
      <svg
        viewBox="0 0 600 700"
        className="india-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* INDIA OUTLINE (more realistic shape) */}
        <path
          className="india-path"
          d="
          M300 40 
          L360 60 L410 100 L450 150 L480 210 
          L500 280 L490 350 L460 420 L420 480 
          L380 530 L330 580 L280 610 L230 630 
          L190 610 L150 570 L120 520 L100 470 
          L90 410 L100 350 L130 290 L160 240 
          L190 200 L220 150 L250 100 Z
          "
        />

        {/* PUNJAB REGION (approx area highlight) */}
        <ellipse
          cx="240"
          cy="140"
          rx="30"
          ry="20"
          className="punjab-highlight"
        />

        {/* PULSE DOT */}
        <circle cx="240" cy="140" r="6" className="punjab-dot" />
        <circle cx="240" cy="140" r="14" className="pulse-ring" />

        {/* LABEL */}
        <text x="275" y="145" className="punjab-text">
          Punjab
        </text>
      </svg>
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