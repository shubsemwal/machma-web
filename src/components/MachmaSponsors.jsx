import "./MachmaSponsors.css";

/* ── Sponsor data — replace src with real logo paths ── */
const poweredBy = {
  name: "ALMTI",
  label: "Association of Ludhiana Machine Tool Industries",
  src: null, // e.g. "/assets/almti.png"
};

const goldSponsors = [
  { name: "Hindustan Hydraulics", src: null },
  { name: "Bachan CNC",           src: null },
];

/* Row 1 — slides LEFT (top marquee) */
const silverRow1 = [
  { name: "Jyoti",           src: null },
  { name: "NTAT Technologies",src: null },
  { name: "Guru Kirpa Automation", src: null },
  { name: "KAMCO",           src: null },
  { name: "Infused Systems",  src: null },
  { name: "Bhavya Machines",  src: null },
];

/* Row 2 — slides RIGHT (bottom marquee) */
const silverRow2 = [
  { name: "KG Electronics",   src: null },
  { name: "Jaewoo Machines",  src: null },
  { name: "Angel India",      src: null },
  { name: "Chamber of Chandigarh Industries", src: null },
  { name: "FICO",             src: null },
  { name: "UFit",             src: null },
];

const partners = [
  { tier: "Technology Partner", name: "BST TEC",  src: null },
  { tier: "Banking Partner",    name: "SIDBI",     src: null },
  { tier: "Supported By",       name: "Laghu Udyog Sangha", src: null },
];

/* ── Placeholder logo block (used when src is null) ── */
function LogoBlock({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div className={`sp-logo-placeholder sp-logo-placeholder--${size}`}>
      <span className="sp-logo-initials">{initials}</span>
      <span className="sp-logo-name">{name}</span>
    </div>
  );
}

/* ── Single sponsor pill ── */
function SponsorPill({ sponsor, size = "md" }) {
  return (
    <div className={`sp-pill sp-pill--${size}`}>
      {sponsor.src ? (
        <img src={sponsor.src} alt={sponsor.name} className="sp-logo-img" />
      ) : (
        <LogoBlock name={sponsor.name} size={size} />
      )}
    </div>
  );
}

/* ── Infinite marquee track ── */
function Marquee({ items, direction = "left", speed = 35, size = "md" }) {
  // duplicate 4× so the strip never shows a gap
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={`sp-marquee sp-marquee--${direction}`}>
      <div
        className="sp-track"
        style={{ "--sp-speed": `${speed}s`, "--sp-dir": direction === "left" ? "-50%" : "0%" }}
      >
        {repeated.map((s, i) => (
          <SponsorPill key={`${s.name}-${i}`} sponsor={s} size={size} />
        ))}
      </div>
    </div>
  );
}

/* ── Main ── */
export default function MachmaSponsors() {
  return (
    <section className="sp-section">
      {/* ── Background ── */}
      <div className="sp-bg-grid" />

      <div className="sp-inner">

        {/* ══ POWERED BY ══ */}
        <div className="sp-powered-wrap">
          <span className="sp-powered-label">Powered by</span>
          <div className="sp-powered-logo">
            {poweredBy.src ? (
              <img src={poweredBy.src} alt={poweredBy.name} />
            ) : (
              <div className="sp-powered-placeholder">
                <span className="sp-powered-name">{poweredBy.name}</span>
                <span className="sp-powered-sub">{poweredBy.label}</span>
              </div>
            )}
          </div>
          <div className="sp-powered-rule" />
        </div>

        {/* ══ GOLD SPONSORS ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--gold">
              ★ Gold Sponsors
            </span>
            <div className="sp-tier-line" />
          </div>
          <div className="sp-gold-row">
            {goldSponsors.map((s) => (
              <SponsorPill key={s.name} sponsor={s} size="lg" />
            ))}
          </div>
        </div>

        {/* ══ SILVER MARQUEE — ROW 1 (slides LEFT) ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--silver">
              ◆ Silver Sponsors
            </span>
            <div className="sp-tier-line" />
          </div>

          <Marquee items={silverRow1} direction="left"  speed={30} size="md" />

          {/* ══ SILVER MARQUEE — ROW 2 (slides RIGHT — opposite) ══ */}
          <Marquee items={silverRow2} direction="right" speed={28} size="md" />
        </div>

        {/* ══ PARTNER PILLS ══ */}
        <div className="sp-tier-block">
          <div className="sp-tier-header">
            <div className="sp-tier-line" />
            <span className="sp-tier-badge sp-tier-badge--partner">
              ✦ Partners & Supporters
            </span>
            <div className="sp-tier-line" />
          </div>
          <div className="sp-partners-row">
            {partners.map((p) => (
              <div key={p.name} className="sp-partner-card">
                <span className="sp-partner-tier">{p.tier}</span>
                <SponsorPill sponsor={p} size="md" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}