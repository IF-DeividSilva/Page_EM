import { Routes } from '@angular/router';

import { Pagina1Component } from './pagina1-component/pagina1-component';


export const routes: Routes = [
  { path: '', redirectTo: 'pagina1-component', pathMatch: 'full' },
  { path: 'pagina1-component', component: Pagina1Component, title: 'Pagina 1' }
];


export default routes;