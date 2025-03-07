import { inject, Injectable } from "@angular/core";
import { ProyectoMaterial } from "../../shared/interfaces/proyecto-material.interface";
import { ProyectoMaterialesService } from "./proyecto-materiales.service";
import { map, catchError, of, Observable } from "rxjs";
import { signalSlice } from "ngxtension/signal-slice";

interface State {
  proyecto_materiales: ProyectoMaterial[] | [];
  status: 'loading' | 'success' | 'error';
  page: number;
  limit: number;
}

@Injectable()
export class ProyectoMaterialStateService {
  private proyectoMaterialesService = inject(ProyectoMaterialesService);

  private initialState: State = {
    proyecto_materiales: [],
    status: 'loading',
    page: 1,
    limit: 10,
  };

  state = (id: number) =>
    signalSlice({
      initialState: this.initialState,
      sources: [
        this.proyectoMaterialesService
          .getProyectoMateriales(id, this.initialState.limit)
          .pipe(
            map((proyecto_materiales): State => ({
              proyecto_materiales: Array.isArray(proyecto_materiales) ? proyecto_materiales : [proyecto_materiales],
              status: 'success',
              page: this.initialState.page,
              limit: this.initialState.limit,
            })),
            catchError((): Observable<State> => of({
              proyecto_materiales: [],
              status: 'error',
              page: this.initialState.page,
              limit: this.initialState.limit,
            }))
          ),
      ],
    });
}
