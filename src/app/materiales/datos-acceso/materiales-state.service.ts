import { inject, Injectable } from "@angular/core";
import { Material } from "../../shared/interfaces/material.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { map } from "rxjs";
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
        .getMateriales(1, 10)
        .pipe(map((materiales) => ({ materiales: materiales as unknown as Material[], status: 'success' as const }))),
    ],
  });
}
