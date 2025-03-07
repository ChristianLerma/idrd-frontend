import { Proyecto } from "./proyecto.interface";
import { Material } from "./material.interface";

export interface ProyectoMaterial {
  id: number;
  proyecto: Proyecto;
  material: Material;
  cantidad: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
