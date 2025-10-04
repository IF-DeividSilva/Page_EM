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
        this.initSidenav();
      }
    });
  }

  private async initSidenav() {
    let MaterializeObj: any = null;
    
    // Tenta usar o npm module primeiro (desenvolvimento)
    try {
      const module = await import('materialize-css');
      MaterializeObj = module;
      console.log('Usando Materialize do NPM');
    } catch (e) {
      // Se falhar, tenta usar o global M do CDN (produção)
      if (typeof M !== 'undefined') {
        MaterializeObj = M;
        console.log('Usando Materialize do CDN');
      } else {
        console.error('Materialize não encontrado');
        return;
      }
    }
    
    const sidenavElement = document.querySelector('.sidenav');
    
    if (sidenavElement && MaterializeObj) {
      const instance = MaterializeObj.Sidenav.init(sidenavElement, {
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
      
      console.log('✅ Sidenav pronto!');
    }
  }
}