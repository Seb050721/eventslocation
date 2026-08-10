import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  if (variant === "outline") {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white hover:text-gray-900"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700"
    >
      {children}
    </Link>
  );
}