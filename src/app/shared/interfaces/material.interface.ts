export interface Material {
  id: number;
  codigo: string;
  descripcion: string;
  unidad: string;
  precio: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
