import { inject, Injectable } from "@angular/core";
import { ProyectosService } from "./proyectos.service";
import { map, Observable } from "rxjs";
import { Proyecto } from "../../shared/interfaces/proyecto.interface";
import { signalSlice } from "ngxtension/signal-slice";

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
        .getProyectos(1).pipe(
          map((proyectos) => ({
            proyectos: proyectos as unknown as Proyecto[],
            status: 'success' as const
          }))
        ),
    ],
    actionSources: {
      remove: (state, action$: Observable<number>) =>
        action$.pipe(
          map((id) => ({
            proyectos: state().proyectos.filter((proyecto) => proyecto.id !== id)
          }),
        ),
      )
    }
  });

  refreshState(id: number) {
    this.state.remove(id);

    this.proyectosService.deleteProyecto(id).subscribe(() => {
      alert('Proyecto eliminado con éxito');
    })
  }
}
