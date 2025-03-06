import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
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
}
