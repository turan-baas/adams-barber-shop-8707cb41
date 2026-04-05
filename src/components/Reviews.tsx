"use client";

const reviews = [
  {
    text: "Been coming here for over a year now and wouldn't go anywhere else. Adam always takes his time and gets the fade just right. Proper old-school barbershop vibe with none of the pretence.",
    name: "James T.",
    label: "Google Review",
  },
  {
    text: "Best barber in Walworth, hands down. Walked in without an appointment and they still fit me in. Left looking and feeling like a million quid. Can't recommend enough.",
    name: "Marcus D.",
    label: "Google Review",
  },
  {
    text: "The hot towel shave here is something else. Really relaxing experience and the attention to detail is class. You can tell these guys genuinely love what they do.",
    name: "Oliver P.",
    label: "Google Review",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[var(--color-accent)]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 lg:py-36 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center reveal">
          <span className="text-[0.8rem] uppercase tracking-[0.2em] font-medium text-[var(--color-accent)]">
            Testimonials
          </span>
          <div className="mt-6 font-[family-name:var(--font-heading)] text-[4rem] md:text-[6rem] font-bold leading-none text-[var(--color-text)]">
            4.0
          </div>
          <div className="mt-3 flex justify-center gap-1">
            {[1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                className="w-6 h-6 text-[var(--color-accent)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <svg
              className="w-6 h-6 text-[var(--color-accent)]/30"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Rated by our loyal clients
          </p>
        </div>

        {/* Review cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Decorative quote */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-[var(--color-accent)] opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>

              <p className="italic text-[var(--color-text)] leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <Stars />
                <p className="mt-2 font-semibold text-sm text-[var(--color-text)]">
                  {review.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {review.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
