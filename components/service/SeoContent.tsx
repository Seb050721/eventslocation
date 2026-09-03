interface SeoContentProps {
  title: string;
  paragraphs: string[];
}

export default function SeoContent({
  title,
  paragraphs,
}: SeoContentProps) {
  if (!paragraphs || paragraphs.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden rounded-[24px] border border-[#E9E2DD] bg-white p-5 shadow-[0_10px_30px_rgba(31,25,27,0.04)] sm:rounded-[28px] sm:p-7 lg:p-10">

      {/* HALOS */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[220px] w-[220px] rounded-full bg-[#4A9692]/7 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-[220px] w-[220px] rounded-full bg-[#EF5A4F]/6 blur-[100px]"
      />

      <div className="relative max-w-4xl">

        {/* BADGE */}

        <span className="inline-flex rounded-full border border-[#4A9692]/20 bg-[#EDF7F6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#347A77] sm:text-xs">
          Event&apos;S Location
        </span>

        {/* TITRE */}

        <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-[#1D1B1C] sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        {/* ACCENTS LOGO */}

        <div
          aria-hidden="true"
          className="mt-4 flex gap-2"
        >
          <span className="h-2 w-2 rounded-full bg-[#4A9692]" />
          <span className="h-2 w-2 rounded-full bg-[#87954E]" />
          <span className="h-2 w-2 rounded-full bg-[#EF5A4F]" />
          <span className="h-2 w-2 rounded-full bg-[#C34F72]" />
          <span className="h-2 w-2 rounded-full bg-[#F3A044]" />
        </div>

        {/* TEXTE */}

        <div className="mt-6 space-y-4 text-sm leading-7 text-[#5F595B] sm:text-base sm:leading-8">

          {paragraphs.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}

        </div>

      </div>

    </section>
  );
}