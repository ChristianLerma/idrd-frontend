import { Component, inject } from '@angular/core';
import { ProyectosService } from '../../datos-acceso/proyectos.service';

@Component({
  selector: 'app-proyecto-lista',
  standalone: true,
  imports: [],
  templateUrl: './proyecto-lista.component.html',
  styles: ``,
  providers: [ProyectosService]
})
export default class ProyectoListaComponent {
  private proyectosService = inject(ProyectosService);

  constructor() {
    this.proyectosService.getProyectos().subscribe((proyecto) => {
      console.log(proyecto)
    });
  }
}
