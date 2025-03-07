import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/datos-acceso/base-http.service";
import { Observable } from "rxjs";
import { ProyectoMaterial } from "../../shared/interfaces/proyecto-material.interface";

const LIMIT = 10;

@Injectable({ providedIn: 'root' })
export class ProyectoMaterialesService extends BaseHttpService{
  getProyectoMateriales(id: number, page: number) : Observable<ProyectoMaterial> {
    return this.http.get<ProyectoMaterial>(`${this.apiUrl}/proyecto-materiales/${id}`, {
      params: {
        page: page,
        limit: LIMIT,
      },
    });
  }
}
