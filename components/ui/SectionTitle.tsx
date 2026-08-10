type Props = {
  badge?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge ? (
        <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      ) : null}

      <h2 className="mt-6 text-4xl font-bold text-gray-900">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-6 text-lg text-gray-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}