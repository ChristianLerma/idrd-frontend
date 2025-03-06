import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/datos-acceso/base-http.service";
import { Observable } from "rxjs";
import { Proyecto } from "../../shared/interfaces/proyecto.interface";

const LIMIT = 10;

@Injectable({ providedIn: 'root' })
export class ProyectosService extends BaseHttpService{
  getProyectos(page: number, limit: number) : Observable<Proyecto> {
    return this.http.get<any>(`${this.apiUrl}/proyectos`, {
      params: {
        page: page,
        limit: LIMIT,
      },
    });
  }

  getProyectoMateriales(id: number) : Observable<unknown> {
    return this.http.get<unknown>(`${this.apiUrl}/proyecto-materiales/${id}`);
  }
}
