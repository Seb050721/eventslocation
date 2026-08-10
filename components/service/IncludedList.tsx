interface IncludedListProps {
  title?: string;
  items: string[];
}

export default function IncludedList({
  title = "Inclus dans la prestation",
  items,
}: IncludedListProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
              ✓
            </div>

            <span className="text-gray-200">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}