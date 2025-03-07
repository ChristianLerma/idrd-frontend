import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/datos-acceso/base-http.service";
import { Observable } from "rxjs";
import { Material } from "../../shared/interfaces/material.interface";

const LIMIT = 10;

@Injectable({ providedIn: 'root' })
export class MaterialesService extends BaseHttpService{
  getMateriales(page: number) : Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/materiales`, {
      params: {
        page: page,
        limit: LIMIT,
      },
    });
  }

  deleteMaterial(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/materiales/${id}`);
  }

  submitApplication(codigo: string , descripcion: string, unidad: string, precio: number) {
    console.log(`Codigo: ${codigo}, Descripción: ${descripcion}, Unidad: ${unidad}, Precio: ${precio}.`);
  }
}
