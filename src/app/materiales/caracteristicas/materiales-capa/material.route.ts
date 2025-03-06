import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('../material-lista/material-lista.component')
  },
  {
    path: '**',
    loadComponent: () => import('../material-lista/material-lista.component')
  },
] as Routes;
