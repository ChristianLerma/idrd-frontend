import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MaterialCardComponent } from '../../ui/material-card/material-card.component';
import { MaterialesStateService } from '../../datos-acceso/materiales-state.service';

@Component({
  selector: 'app-material-lista',
  standalone: true,
  imports: [MaterialCardComponent],
  templateUrl: './material-lista.component.html',
  styles: ``,
  providers: [MaterialesStateService],

})
export default class MaterialListaComponent {
  materialState = inject(MaterialesStateService);

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter<number>();
  onRemove(id: number) {
    const result = confirm('¿Estás seguro de que quieres eliminar este material?');
    if (result) {
      this.materialState.refreshState(id);
    }
  }
}
