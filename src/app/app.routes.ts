import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/caracteristicas/proyecto-capa/proyecto.route')
  },
  {
    path: 'materiales',
    loadChildren: () => import('./materiales/caracteristicas/materiales-capa/material.route')
  },
  {
    path: '**',
    redirectTo: 'proyectos',
  }
];
