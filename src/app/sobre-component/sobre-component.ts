import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-sobre-component',
  imports: [RouterLink],
  templateUrl: './sobre-component.html',
  styleUrl: './sobre-component.css'
})
export class SobreComponent {
  constructor(private route: ActivatedRoute){}
}
