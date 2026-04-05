"use client";

const services = [
  {
    title: "Classic Haircut",
    description:
      "A precision cut tailored to your style. Includes a consultation, wash, cut, and finish — whether you prefer a sharp fade, textured crop, or timeless side part.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664"
        />
      </svg>
    ),
  },
  {
    title: "Hot Towel Shave",
    description:
      "The ultimate traditional grooming ritual. Steamed towels, premium lather, and a straight razor glide for the closest, most comfortable shave you'll ever experience.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    title: "Beard Sculpting",
    description:
      "From a clean-up trim to a full beard redesign. We shape, line, and detail your facial hair to complement your face structure and personal style perfectly.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center reveal">
          <span className="text-[0.8rem] uppercase tracking-[0.2em] font-medium text-[var(--color-accent)]">
            Our Services
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] font-semibold text-[2rem] md:text-[2.75rem] leading-tight tracking-[-0.02em] text-[var(--color-text)]">
            Crafted for the
            <br />
            Modern Gentleman
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${i + 1} group border border-neutral-200 rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--color-accent)]/40`}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="mt-6 font-semibold text-lg text-[var(--color-text)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[var(--color-text-muted)] leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <p className="text-[var(--color-text-muted)]">
            Looking for something specific? Get in touch and we&apos;ll make it
            happen.
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
