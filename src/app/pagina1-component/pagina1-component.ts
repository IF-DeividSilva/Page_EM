import { Component } from '@angular/core';


import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
 selector: 'app-pagina1-component',
 standalone: true,
 imports: [RouterLink],
 templateUrl: './pagina1-component.html',
 styleUrl: './pagina1-component.css'
})
export class Pagina1Component {


 constructor(private route: ActivatedRoute){}
 }
