import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Bem-vindo ao EcoMuseu</h1>
    <p>Esta é a página inicial do EcoMuseu.</p>
  `
})
export class HomeComponent {}
