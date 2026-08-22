import type { EquipmentItem } from "@/components/service/services";

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
    <section className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 lg:p-8">

      {/* TITRE */}

      <div className="mb-6 sm:mb-8">

        <span className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-green-400 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em]">
          Matériel
        </span>

        <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
          Location au détail
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
          Louez uniquement le matériel dont vous avez besoin.
        </p>

      </div>

      {/* MOBILE */}

      <div className="space-y-3 md:hidden">

        {equipments.map((equipment) => (
          <div
            key={equipment.name}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4"
          >

            <span className="min-w-0 text-sm font-semibold leading-5 text-white">
              {equipment.name}
            </span>

            <span className="shrink-0 text-lg font-black text-green-400">
              {equipment.price} €
            </span>

          </div>
        ))}

      </div>

      {/* TABLETTE / DESKTOP */}

      <div className="hidden overflow-hidden rounded-2xl border border-white/10 md:block">

        <table className="w-full">

          <tbody>

            {equipments.map((equipment, index) => (
              <tr
                key={equipment.name}
                className={
                  index === 0
                    ? ""
                    : "border-t border-white/10"
                }
              >

                <td className="px-6 py-5 text-base font-medium text-white">
                  {equipment.name}
                </td>

                <td className="px-6 py-5 text-right text-lg font-black text-green-400">
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