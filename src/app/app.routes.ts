import { Routes } from '@angular/router';


import { SobreComponent } from './sobre-component/sobre-component';
import { LandPageComponent } from './land-page-component/land-page-component';
import { AcervoComponent } from '../app/acervo-component/acervo-component';
import { DetalhesComponent } from './detalhes-component/detalhes-component';
import { VisiteNosComponent } from './visite-nos-component/visite-nos-component';



export const routes: Routes = [
   {path:'', component: LandPageComponent},
   {path: 'sobre-component', component: SobreComponent},
   {path: 'acervo-component', component: AcervoComponent},
   {path: 'detalhes-component/:id', component: DetalhesComponent},
   {path: 'visite-nos-component', component: VisiteNosComponent}
];

export default routes;