import { useEffect, useRef, useState } from "react";
import "./MachmaHero.css";
import heroImage from "../assets/machma-expo-2026-main.jpeg";
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

  return (
<section class="machma-hero">
  <img 
    src={heroImage} 
    alt="MachmaHero banner"
    class="hero-img"
  />
</section>
  );
}