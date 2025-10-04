import { Component, signal, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';

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
  private sidenavInstance: any;
  private router = inject(Router);

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.initSidenav(), 500);
        this.setupFocusManagement();
      }
    });
  }

  private setupFocusManagement() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Fecha o sidenav se estiver aberto
      if (this.sidenavInstance?.isOpen) {
        this.sidenavInstance.close();
      }
      
      // Move o foco para o topo da página
      setTimeout(() => {
        const mainContent = document.querySelector('router-outlet + *') || 
                           document.querySelector('main') ||
                           document.body;
        
        if (mainContent) {
          (mainContent as HTMLElement).setAttribute('tabindex', '-1');
          (mainContent as HTMLElement).focus();
          (mainContent as HTMLElement).removeAttribute('tabindex');
        }
      }, 100);
    });
  }

  private initSidenav() {
    const waitForM = setInterval(() => {
      if (typeof M !== 'undefined') {
        clearInterval(waitForM);
        
        const sidenavElement = document.querySelector('.sidenav');
        
        if (sidenavElement) {
          this.sidenavInstance = M.Sidenav.init(sidenavElement, {
            edge: 'left',
            draggable: true,
            onOpenStart: () => {
              const firstLink = sidenavElement.querySelector('a');
              setTimeout(() => (firstLink as HTMLElement)?.focus(), 100);
            }
          });
          
          console.log('Sidenav OK');
        }
      }
    }, 100);
    
    setTimeout(() => clearInterval(waitForM), 5000);
  }
}