import { Routes } from '@angular/router';


import { SobreComponent } from './pages/sobre-component/sobre-component';
import { AcervoComponent } from './pages/acervo-component/acervo-component';
import { DetalhesComponent } from './pages/detalhes-component/detalhes-component';
import { VisiteNosComponent } from './pages/visite-nos-component/visite-nos-component';



export const routes: Routes = [
   {path:'', component: SobreComponent},
   {path: 'sobre-component', component: SobreComponent},
   {path: 'acervo-component', component: AcervoComponent},
   {path: 'detalhes-component/:id', component: DetalhesComponent},
   {path: 'visite-nos-component', component: VisiteNosComponent}
];

export default routes;