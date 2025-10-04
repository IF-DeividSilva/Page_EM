import { Component } from '@angular/core';


import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
 selector: 'app-acervo-component',
 imports: [RouterLink],
 templateUrl: './acervo-component.html',
 styleUrl: './acervo-component.css'
})
export class AcervoComponent {


 constructor(private route: ActivatedRoute){}
 }
