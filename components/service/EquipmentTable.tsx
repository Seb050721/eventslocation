import type { EquipmentItem } from "@/data/services";

interface Props {
  equipments?: EquipmentItem[];
}

export default function EquipmentTable({ equipments }: Props) {
  if (!equipments || equipments.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">
        Location au détail
      </h2>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full">
          <tbody>
            {equipments.map((equipment) => (
              <tr
                key={equipment.name}
                className="border-t border-white/10"
              >
                <td className="px-6 py-5 text-white">
                  {equipment.name}
                </td>

                <td className="px-6 py-5 text-right font-bold text-green-400">
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