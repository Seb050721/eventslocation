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
    <section className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-5 sm:rounded-[26px] sm:p-7 lg:rounded-[28px] lg:p-10">

      <div className="max-w-4xl">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-green-400 sm:text-xs">
          Event&apos;S Location
        </span>

        <h2 className="mt-5 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>

        <div className="mt-6 space-y-4 text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 lg:text-lg">

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