import { Component, signal, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('museu-app');
  private platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.initSidenav();
      }
    });
  }

  private async initSidenav() {
    try {
      const M = await import('materialize-css');
      const sidenavElement = document.querySelector('.sidenav');
      
      if (sidenavElement) {
        const instance = M.Sidenav.init(sidenavElement, {
          edge: 'left',
          draggable: true
        });
        
        // Event listener para o botão
        const trigger = document.querySelector('.sidenav-trigger');
        if (trigger) {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            instance.open();
          });
        }
        
        console.log(' Sidenav funcionando!');
      }
    } catch (error) {
      console.error(' Erro ao inicializar sidenav:', error);
    }
  }
}