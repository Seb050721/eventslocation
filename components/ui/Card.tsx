type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {children}
    </div>
  );
}