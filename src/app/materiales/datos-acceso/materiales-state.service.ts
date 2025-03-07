import { inject, Injectable } from "@angular/core";
import { Material } from "../../shared/interfaces/material.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { map, Observable } from "rxjs";
import { MaterialesService } from "./materiales.service";

interface State {
  materiales: Material[];
  status: 'loading' | 'success' | 'error';
  page: number;
  limit: number;
}

@Injectable()
export class MaterialesStateService {
  private materialesService = inject(MaterialesService);

  private initialState: State = {
    materiales: [],
    status: 'loading' as const ,
    page: 1,
    limit: 10,
  };

  state = signalSlice({
    initialState: this.initialState,
    sources: [
      this.materialesService
        .getMateriales(1)
        .pipe(map((materiales) => ({ materiales: materiales as unknown as Material[], status: 'success' as const }))),
    ],
    actionSources: {
      remove: (state, action$: Observable<number>) =>
        action$.pipe(
          map((id) => ({
            materiales: state().materiales.filter((material) => material.id !== id),
          })),
        ),
    },
  });

  refreshState(id: number) {
    this.state.remove(id);

    this.materialesService.deleteMaterial(id).subscribe(() => {
      alert('Material eliminado con éxito');
    });
  }
}
