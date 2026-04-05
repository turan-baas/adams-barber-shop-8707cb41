"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Contact info + form */}
          <div className="reveal">
            <span className="text-[0.8rem] uppercase tracking-[0.2em] font-medium text-[var(--color-accent)]">
              Contact
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] font-semibold text-[2rem] md:text-[2.75rem] leading-tight tracking-[-0.02em] text-[var(--color-text)]">
              Get in Touch
            </h2>

            <div className="mt-8 space-y-5">
              {/* Phone */}
              <a
                href="tel:+442072772927"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Phone
                  </p>
                  <p className="font-medium text-[var(--color-text)]">
                    +44 20 7277 2927
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Address
                  </p>
                  <p className="font-medium text-[var(--color-text)]">
                    403 Walworth Rd, London SE17 2AW
                  </p>
                </div>
              </div>

              {/* Google Maps button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Adam's+barber+shop+403+Walworth+Rd+London+SE17+2AW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 border border-[var(--color-accent)] text-[var(--color-accent)] text-sm uppercase tracking-[0.1em] font-medium px-6 py-3 rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>

            {/* Contact form */}
            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[var(--color-accent)] text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Map embed */}
          <div className="reveal reveal-delay-1">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden border-2 border-[var(--color-accent)]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.5!2d-0.0935!3d51.4875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604e4c2d3b027%3A0x4c0cfef3c3eb21a7!2s403%20Walworth%20Rd%2C%20London%20SE17%202AW%2C%20UK!5e0!3m2!1sen!2suk!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adam's Barber Shop location map"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
