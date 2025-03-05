import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { BaseHttpService } from "../../shared/datos-acceso/base-http.service";
import { Observable } from "rxjs";
import { Proyecto } from "../../shared/interfaces/proyecto.interface";

@Injectable()
export class ProyectosService extends BaseHttpService{
  getProyectos() : Observable<Proyecto> {
    return this.http.get<any>(`${this.apiUrl}/proyectos`);
  }
}
