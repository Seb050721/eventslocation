interface IncludedListProps {
  title?: string;
  items: string[];
}

export default function IncludedList({
  title = "Inclus dans la prestation",
  items,
}: IncludedListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Inclus
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
          {title}
        </h2>

      </div>

      {/* LISTE */}

      <div className="grid gap-3 sm:gap-4 md:grid-cols-2">

        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 sm:gap-4 sm:p-5 lg:hover:border-green-500/30 lg:hover:bg-green-500/[0.05]"
          >

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-base font-black text-green-400 sm:h-10 sm:w-10">
              ✓
            </div>

            <span className="pt-1 text-sm font-medium leading-6 text-gray-200 sm:text-base">
              {item}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}