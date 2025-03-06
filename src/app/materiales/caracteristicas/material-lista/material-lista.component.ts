import { Component, inject, OnInit } from '@angular/core';
import { MaterialCardComponent } from '../../ui/material-card/material-card.component';
import { MaterialesStateService } from '../../datos-acceso/materiales-state.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-material-lista',
  standalone: true,
  imports: [MaterialCardComponent],
  templateUrl: './material-lista.component.html',
  styles: ``,
  providers: [MaterialesStateService],

})
export default class MaterialListaComponent implements OnInit {
  materialState = inject(MaterialesStateService);

  ngOnInit() {
    initFlowbite();
  }
}
