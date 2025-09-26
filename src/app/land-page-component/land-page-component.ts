import { Component } from '@angular/core';
import { Pagina1Component } from '../pagina1-component/pagina1-component';


import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
 selector: 'app-land-page-component',
 imports: [RouterLink],
 templateUrl: './land-page-component.html',
 styleUrl: './land-page-component.css'
})
export class LandPageComponent {


 constructor(private route: ActivatedRoute){}


}
