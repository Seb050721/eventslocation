export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  unitLabel?: string;
}

export const inventory: InventoryItem[] = [
  {
    id: "photobooth",
    name: "Photo Booth",
    category: "Animation",
    stock: 1,
  },
  {
    id: "sonorisation",
    name: "Kit Sonorisation",
    category: "Audio",
    stock: 2,
  },
  {
    id: "micro-hf",
    name: "Micro HF",
    category: "Audio",
    stock: 2,
  },
  {
    id: "videoprojecteur",
    name: "Vidéoprojecteur",
    category: "Projection",
    stock: 1,
  },
  {
    id: "ecran",
    name: "Écran 150 pouces",
    category: "Projection",
    stock: 1,
  },
  {
    id: "smoke-puff",
    name: "Smoke Puff",
    category: "Effets",
    stock: 1,
    unitLabel: "système jusqu’à 5 feux",
  },
  {
    id: "machine-fumee",
    name: "Machine à fumée",
    category: "Effets",
    stock: 2,
  },
  {
    id: "machine-bulles",
    name: "Machine à bulles",
    category: "Effets",
    stock: 1,
  },
  {
    id: "tente-4x8",
    name: "Tente 4 × 8 m",
    category: "Mobilier",
    stock: 1,
  },
  {
    id: "table-ronde-152",
    name: "Table ronde Ø152 cm",
    category: "Mobilier",
    stock: 20,
  },
  {
    id: "table-rectangulaire",
    name: "Table rectangulaire",
    category: "Mobilier",
    stock: 10,
  },
  {
    id: "mange-debout",
    name: "Mange-debout",
    category: "Mobilier",
    stock: 12,
  },
  {
    id: "chaise",
    name: "Chaise",
    category: "Mobilier",
    stock: 50,
  },
  {
    id: "tabouret",
    name: "Tabouret",
    category: "Mobilier",
    stock: 20,
  },
];