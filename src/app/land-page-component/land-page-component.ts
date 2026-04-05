import { Component } from '@angular/core';
import { SobreComponent } from '../sobre-component/sobre-component';


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
