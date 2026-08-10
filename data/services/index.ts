



import { photobooth } from "./photobooth";
import { sonorisation } from "./sonorisation";
import { projection } from "./projection";
import { mobilier } from "./mobilier";
import { effets } from "./effets";
import { feux } from "./feux";
import type { Service } from "./types";



export const services: Service[] = [
  photobooth,
  sonorisation,
  projection,
  mobilier,
  effets,
  feux, 
];

export * from "./types";