// ng build --output-path docs --base-href   https://if-deividsilva.github.io/Page_EcoMuseu/
// ng serve --host 0.0.0.0
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../app/components/footer-component/footer-component';
import { NavbarComponent } from '../app/components/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('museu-app');
}