import { Component, inject, Input, input } from '@angular/core';
import { Material } from '../../../shared/interfaces/material.interface';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MaterialesService } from '../../datos-acceso/materiales.service';
import { DatePipe } from '@angular/common';

enum AccionEditar {
  Editar = 1,
  Cancelar = 2
}

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './material-card.component.html',
  styles: ``,
  providers: [DatePipe],
})
export class MaterialCardComponent {
  constructor(public datepipe: DatePipe){}
  material = input.required<Material>();

  materialService = inject(MaterialesService);
  form = FormGroup;

  @Input() openModal!: Material;
  isModalVisible = false;

  materialForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    unidad: new FormControl(''),
    precio: new FormControl('')
    });

  formatCurrency(value: number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  }

  formatDate(value: string) {
    const fecha = new Date(value);
    return this.datepipe.transform(fecha, 'yyyy-MM-dd');
  }

  toggleModal(Accion: AccionEditar) {
    this.isModalVisible = !this.isModalVisible;
    if (Accion === AccionEditar.Editar) {
      this.materialService.submitApplication(this.materialForm.value.codigo || '', this.materialForm.value.descripcion || '', this.materialForm.value.unidad || '', this.materialForm.value.precio as unknown as number);
    }
  }

  submitApplication() {
    this.materialService.submitApplication(this.materialForm.value.codigo || '', this.materialForm.value.descripcion || '', this.materialForm.value.unidad || '', this.materialForm.value.precio as unknown as number);
  }
}
