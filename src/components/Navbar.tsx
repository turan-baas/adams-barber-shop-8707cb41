"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-bg)]/95 backdrop-blur-[12px] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-tight"
        >
          <span className="text-[var(--color-accent)]">Adam&apos;s</span>{" "}
          <span className={scrolled ? "text-[var(--color-text)]" : "text-[var(--color-text)]"}>
            Barber Shop
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-[0.8rem] uppercase tracking-[0.15em] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 bg-[var(--color-accent)] text-white text-[0.8rem] uppercase tracking-[0.15em] font-medium px-6 py-2.5 rounded-full hover:scale-[1.03] hover:shadow-lg transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.75px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.75px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl font-[family-name:var(--font-heading)] font-semibold py-4 transition-all duration-500"
            style={{
              transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
