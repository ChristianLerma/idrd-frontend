import { Component, EventEmitter, input, Output } from '@angular/core';
import { Proyecto } from '../../../shared/interfaces/proyecto.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.component.html',
  styles: ``,
  providers: [DatePipe],
})
export class ProyectoCardComponent {
  constructor(public datepipe: DatePipe){}

  proyecto = input.required<Proyecto>();

  formatDate(value: string) {
    const fecha = new Date(value);
    return this.datepipe.transform(fecha, 'yyyy-MM-dd');
  }

  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter<number>();
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
