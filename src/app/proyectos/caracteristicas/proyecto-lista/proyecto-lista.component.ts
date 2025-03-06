import { Component, inject } from '@angular/core';
import { ProyectosStateService } from '../../datos-acceso/proyectos-state.service';
import { ProyectoCardComponent } from '../../ui/proyecto-card/proyecto-card.component';

@Component({
  selector: 'app-proyecto-lista',
  standalone: true,
  imports: [ProyectoCardComponent],
  templateUrl: './proyecto-lista.component.html',
  styles: ``,
  providers: [ProyectosStateService],
})
export default class ProyectoListaComponent {
  proyectosState = inject(ProyectosStateService);
}
