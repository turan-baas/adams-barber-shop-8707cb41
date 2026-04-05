"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585747860019-8004e7de3e80?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Accent gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 50%, rgba(201,169,110,0.15) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
            <span className="text-[0.8rem] uppercase tracking-[0.2em] font-medium text-[var(--color-accent)]">
              Est. London
            </span>
          </div>

          <h1
            className="font-[family-name:var(--font-heading)] font-bold leading-[0.95] tracking-[-0.03em] text-[2.75rem] md:text-[4rem] lg:text-[5rem] text-white"
          >
            Adam&apos;s
            <br />
            <span className="text-[var(--color-accent)]">Barber</span> Shop
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/70 font-[family-name:var(--font-body)] font-normal max-w-xl leading-relaxed">
            Where tradition meets modern craft. Premium grooming on Walworth
            Road, tailored to the gentleman who appreciates the finer details.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
            >
              Book Now
            </a>
            <a
              href="#about"
              className="inline-block border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-[var(--color-accent)]/40 animate-pulse" />
      </div>
    </section>
  );
}
