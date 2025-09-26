import { Routes } from '@angular/router';

import { Pagina1Component } from './pagina1-component/pagina1-component';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent, title: 'HomePage' },
  { path: 'pagina1-component', component: Pagina1Component, title: 'Pagina 1' }
];


export default routes;