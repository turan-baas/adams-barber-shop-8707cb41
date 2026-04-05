export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left: Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold">
              <span className="text-[var(--color-accent)]">Adam&apos;s</span>{" "}
              Barber Shop
            </p>
            <p className="mt-3 text-white/50 text-sm leading-relaxed">
              Premium grooming in the heart of Walworth.
              <br />
              Where every cut is a craft.
            </p>
          </div>

          {/* Center: Nav */}
          <div>
            <h4 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/30 font-medium mb-4">
              Navigation
            </h4>
            <nav className="space-y-2">
              {["Home", "About", "Services", "Reviews", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-sm text-white/60 hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/30 font-medium mb-4">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/60">
              <a
                href="tel:+442072772927"
                className="block hover:text-[var(--color-accent)] transition-colors"
              >
                +44 20 7277 2927
              </a>
              <p>403 Walworth Rd</p>
              <p>London SE17 2AW</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Adam&apos;s Barber Shop. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Crafted with care in London
          </p>
        </div>
      </div>
    </footer>
  );
}
