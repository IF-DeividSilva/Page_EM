import { Routes } from '@angular/router';


import { Pagina1Component } from '../app/pagina1-component/pagina1-component';
import { LandPageComponent } from './land-page-component/land-page-component';
import { AcervoComponent } from '../app/acervo-component/acervo-component';


export const routes: Routes = [
   {path:'', component: LandPageComponent},
   {path: 'pagina1-component', component: Pagina1Component},
   {path: 'acervo-component', component: AcervoComponent}
];

export default routes;