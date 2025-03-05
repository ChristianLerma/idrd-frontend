import { Departamento } from "./departamento.interface";

export interface Municipio {
  id: number;
  nombre: string;
  departamento: Departamento;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
