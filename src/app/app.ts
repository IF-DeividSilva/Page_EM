import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import * as M from 'materialize-css';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('museu-app');

  ngAfterViewInit() {
    // Inicializa o Sidenav
    const sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs, {});
  }
}