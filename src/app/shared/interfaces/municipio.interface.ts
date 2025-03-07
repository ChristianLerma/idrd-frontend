import { Departamento } from "./departamento.interface";

export interface Municipio {
  id: number;
  nombre: string;
  departamento: Departamento;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
