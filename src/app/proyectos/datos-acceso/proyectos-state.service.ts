import { inject, Injectable } from "@angular/core";
import { Proyecto } from "../../shared/interfaces/proyecto.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProyectosService } from "./proyectos.service";
import { map } from "rxjs";

interface State {
  proyectos: Proyecto[];
  status: 'loading' | 'success' | 'error';
  page: number;
  limit: number;
}

@Injectable()
export class ProyectosStateService {
  private proyectosService = inject(ProyectosService);

  private initialState: State = {
    proyectos: [],
    status: 'loading' as const ,
    page: 1,
    limit: 10,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.proyectosService
        .getProyectos(1, 10)
        .pipe(map((proyectos) => ({ proyectos: proyectos as unknown as Proyecto[], status: 'success' as const }))),
    ],
  });
}
