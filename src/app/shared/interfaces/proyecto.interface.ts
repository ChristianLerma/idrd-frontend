import { Departamento } from "./departamento.interface";
import { Municipio } from "./municipio.interface";

export interface Proyecto {
  id: number;
  nombre: string;
  departamento: Departamento;
  municipio: Municipio;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
