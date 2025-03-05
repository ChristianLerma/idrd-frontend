import { Routes } from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('../proyecto-lista/proyecto-lista.component')
  },
  {
    path: '**',
    loadComponent: () => import('../proyecto-lista/proyecto-lista.component')
  },
] as Routes;