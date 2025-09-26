import { Routes } from '@angular/router';


import { Pagina1Component } from '../app/pagina1-component/pagina1-component';
import { LandPageComponent } from './land-page-component/land-page-component';


export const routes: Routes = [
   {path:'', component: LandPageComponent},
   {path: 'museu/pagina1-component', component: Pagina1Component}
];

export default routes;