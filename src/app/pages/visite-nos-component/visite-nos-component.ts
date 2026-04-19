import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visite-nos-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './visite-nos-component.html',
  styleUrl: './visite-nos-component.css'
})
export class VisiteNosComponent {
  constructor(private route: ActivatedRoute) {}
}

