"use client";

export default function About() {
  return (
    <section id="about" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-center">
          {/* Text — 3/5 */}
          <div className="lg:col-span-3 reveal">
            <span className="text-[0.8rem] uppercase tracking-[0.2em] font-medium text-[var(--color-accent)]">
              About Us
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] font-semibold text-[2rem] md:text-[2.75rem] leading-tight tracking-[-0.02em] text-[var(--color-text)]">
              A Cut Above the Rest,
              <br />
              Right on Walworth Road
            </h2>

            <div className="mt-8 space-y-6 text-[var(--color-text-muted)]">
              <p>
                Tucked away on the vibrant stretch of Walworth Road in the heart
                of Southwark, Adam&apos;s Barber Shop has been a cornerstone of
                the SE17 community. What started as a simple chair and a pair of
                clippers has grown into one of the neighbourhood&apos;s most
                trusted grooming destinations.
              </p>
              <p>
                Every haircut here tells a story. Whether you&apos;re after a
                sharp skin fade, a classic scissor cut, or a traditional hot
                towel shave, Adam and the team bring the same level of craft and
                care to every client who walks through the door. No rush, no
                compromise — just honest, skilled barbering.
              </p>
              <p>
                We believe a great barbershop is more than just a place to get a
                haircut. It&apos;s where conversations happen, where regulars
                become friends, and where you leave feeling like the best version
                of yourself. That&apos;s the experience we&apos;ve built, one
                client at a time.
              </p>
            </div>
          </div>

          {/* Image — 2/5 */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <div className="relative">
              {/* Accent border offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--color-accent)]/30 rounded-2xl" />
              {/* Main image */}
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
                alt="Barber at work giving a precision haircut at Adam's Barber Shop"
                className="relative w-full h-[400px] lg:h-[480px] object-cover rounded-2xl shadow-xl"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl px-6 py-5">
                <p className="font-[family-name:var(--font-heading)] font-semibold text-lg text-white">
                  Est. SE17
                </p>
                <p className="text-sm text-white/70">
                  Walworth Road
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
