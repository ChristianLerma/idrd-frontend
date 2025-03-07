import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/datos-acceso/base-http.service";
import { Observable } from "rxjs";
import { Proyecto } from "../../shared/interfaces/proyecto.interface";

const LIMIT = 10;

@Injectable({ providedIn: 'root' })
export class ProyectosService extends BaseHttpService{
  getProyectos(page: number) : Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.apiUrl}/proyectos`, {
      params: {
        page: page,
        limit: LIMIT,
      },
    });
  }

  deleteProyecto(id: number) : Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/proyectos/${id}`);
  }
}
