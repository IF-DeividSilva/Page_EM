import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-visite-nos-component',
  imports: [RouterLink],
  templateUrl: './visite-nos-component.html',
  styleUrl: './visite-nos-component.css'
})
export class VisiteNosComponent {
   constructor(private route: ActivatedRoute){}
}
