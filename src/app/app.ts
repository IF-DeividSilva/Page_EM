import { Component, signal, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var M: any;

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
        setTimeout(() => this.initSidenav(), 500);
      }
    });
  }

  private initSidenav() {
    // Aguarda o M estar disponível do CDN
    const waitForM = setInterval(() => {
      if (typeof M !== 'undefined') {
        clearInterval(waitForM);
        
        const sidenavElement = document.querySelector('.sidenav');
        
        if (sidenavElement) {
          const instance = M.Sidenav.init(sidenavElement, {
            edge: 'left',
            draggable: true
          });
          
          const trigger = document.querySelector('.sidenav-trigger');
          if (trigger) {
            trigger.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              instance.open();
            });
          }
          
          console.log('Sidenav OK');
        }
      }
    }, 100);
    
    // Timeout de segurança (5 segundos)
    setTimeout(() => clearInterval(waitForM), 5000);
  }
}