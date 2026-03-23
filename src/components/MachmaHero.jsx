import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import About from "./MachmaAbout";
import "./MachmaHero.css";

const stats = [
  { value: "500+", label: "Stalls" },
  { value: "10000+", label: "Product Display" },
  { value: "50000+", label: "Visitors" },
];

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about", hasDropdown: false },
  { label: "FOCUSE US", href: "#" },
  { label: "PROMOTION", href: "#", hasDropdown: false },
  { label: "GALLERY", href: "#", hasDropdown: false },
  { label: "DOWNLOADS", href: "#", hasDropdown: false },
];

/**
 * MachmaHero Props
 * ─────────────────────────────────────────────────────────────
 * @prop {string} logoImage     Path to logo image (navbar).
 *                              e.g.  logoImage="/assets/logo.png"
 *                              Falls back to text logo if not provided.
 *
 * @prop {string} heroBgImage   Path to hero background photo.
 *                              e.g.  heroBgImage="/assets/hero-bg.jpg"
 *                              Falls back to gradient if not provided.
 *
 * @prop {string} machineImage  Path to machine / robot photo (right side).
 *                              e.g.  machineImage="/assets/robot.png"
 *                              Falls back to SVG illustration if not provided.
 * ─────────────────────────────────────────────────────────────
 */
export default function MachmaHero({
  logoImage = null,
  heroBgImage = null,
  machineImage = null,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.classList.add("hero--visible");
  }, []);

  // Hero background: overlay gradient on top of photo so text stays readable
  const heroBgStyle = heroBgImage
    ? {
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(245,240,235,0.97) 0%,
            rgba(236,230,224,0.88) 45%,
            rgba(232,221,213,0.50) 100%
          ),
          url(${heroBgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <section className="machma-hero-section">
      {/* ── HERO ── */}
      <div className="machma-hero" ref={heroRef} style={heroBgStyle}>
        {/* Red stripe bars */}
        <div className="hero-bar hero-bar--top" />
        <div className="hero-bar hero-bar--bottom" />

        {/* Dot-grid texture (hidden when bg image is set) */}
        {!heroBgImage && <div className="hero-grid-overlay" />}

        {/* ── LEFT ── */}
        <div className="hero-left">
          <p className="hero-tagline">India's Leading Exhibition on</p>
          <p className="hero-tagline hero-tagline--bold">
            Machine Tools, Automation &amp; Laser Technology
          </p>

          <div className="hero-badge">
            <span className="badge-edition">13th</span>
            <span className="badge-name">MACHMA</span>
            <span className="badge-expo">EXPO‑2026</span>
          </div>
        </div>

        {/* ── CENTER ── */}
        <div className="hero-center">
          <div className="hero-dates">
            <span>11</span><span className="date-sep">‑</span>
            <span>12</span><span className="date-sep">‑</span>
            <span>13</span><span className="date-sep">‑</span>
            <span>14</span>
          </div>
          <div className="hero-month">DECEMBER 2026</div>

          <ul className="hero-stats">
            {stats.map((s) => (
              <li key={s.label}>
                <span className="stat-dot" />
                <div>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT – photo or SVG fallback ── */}
        <div className="hero-right">
          {machineImage ? (
            <div className="machine-photo-wrap">
              <img
                src={machineImage}
                alt="Machine / Robot"
                className="machine-photo"
              />
            </div>
          ) : (
            <div className="robot-arm">
              <svg viewBox="0 0 260 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="370" width="100" height="40" rx="6" fill="#b84a00" />
                <rect x="100" y="350" width="60" height="28" rx="5" fill="#d45500" />
                <rect x="108" y="240" width="44" height="118" rx="10" fill="#e06010" />
                <ellipse cx="130" cy="240" rx="28" ry="18" fill="#f07020" />
                <ellipse cx="130" cy="238" rx="22" ry="14" fill="#c04800" />
                <rect x="114" y="120" width="36" height="125" rx="10" fill="#e06010" />
                <ellipse cx="132" cy="122" rx="24" ry="15" fill="#f07020" />
                <ellipse cx="132" cy="120" rx="20" ry="12" fill="#c04800" />
                <rect x="122" y="50" width="26" height="78" rx="8" fill="#e06010" />
                <ellipse cx="135" cy="52" rx="18" ry="11" fill="#f07020" />
                <rect x="128" y="14" width="14" height="42" rx="5" fill="#d45500" />
                <rect x="118" y="8" width="10" height="22" rx="4" fill="#c04800" />
                <rect x="142" y="8" width="10" height="22" rx="4" fill="#c04800" />
                <rect x="124" y="260" width="6" height="60" rx="3" fill="rgba(255,255,255,0.15)" />
                <rect x="128" y="140" width="4" height="50" rx="2" fill="rgba(255,255,255,0.12)" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}