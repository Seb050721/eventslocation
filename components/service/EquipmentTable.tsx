import type { EquipmentItem } from "@/data/services";

interface Props {
  equipments?: EquipmentItem[];
}

export default function EquipmentTable({
  equipments,
}: Props) {
  if (!equipments || equipments.length === 0) {
    return null;
  }

  return (
    <section className="rounded-[24px] border border-[#E9E2DD] bg-[#FBFAF8] p-5 shadow-[0_10px_30px_rgba(31,25,27,0.05)] sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-[#87954E]/20 bg-[#F3F5E9] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6F7D3F] sm:px-4 sm:py-2 sm:text-xs">
          Matériel
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-[#1D1B1C] sm:text-3xl">
          Location au détail
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#716A6C] sm:text-base">
          Louez uniquement le matériel dont vous avez besoin.
        </p>

      </div>

      {/* MOBILE */}

      <div className="space-y-3 md:hidden">

        {equipments.map((equipment, index) => (
          <div
            key={equipment.name}
            className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[#E9E2DD] bg-white px-4 py-4 shadow-[0_6px_20px_rgba(31,25,27,0.03)] transition-all duration-200 hover:border-[#4A9692]/30 hover:shadow-[0_10px_25px_rgba(31,25,27,0.05)]"
          >

            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 h-full w-1 ${
                index % 5 === 0
                  ? "bg-[#4A9692]"
                  : index % 5 === 1
                    ? "bg-[#87954E]"
                    : index % 5 === 2
                      ? "bg-[#EF5A4F]"
                      : index % 5 === 3
                        ? "bg-[#C34F72]"
                        : "bg-[#F3A044]"
              }`}
            />

            <span className="min-w-0 pl-2 text-sm font-semibold leading-5 text-[#3F3A3C]">
              {equipment.name}
            </span>

            <span className="shrink-0 text-lg font-black text-[#EF5A4F]">
              {equipment.price} €
            </span>

          </div>
        ))}

      </div>

      {/* TABLETTE / DESKTOP */}

      <div className="hidden overflow-hidden rounded-2xl border border-[#E9E2DD] bg-white shadow-[0_6px_20px_rgba(31,25,27,0.03)] md:block">

        <table className="w-full">

          <tbody>

            {equipments.map((equipment, index) => (
              <tr
                key={equipment.name}
                className={`transition-colors duration-200 hover:bg-[#F7F3EF] ${
                  index === 0
                    ? ""
                    : "border-t border-[#E9E2DD]"
                }`}
              >

                <td className="px-6 py-5 text-base font-medium text-[#3F3A3C]">
                  {equipment.name}
                </td>

                <td className="px-6 py-5 text-right text-lg font-black text-[#EF5A4F]">
                  {equipment.price} €
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}