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
  public router = inject(Router);

  constructor() {
    // para rodar dps da página ser renderizada
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        // espera 500ms para inicializar o menu (tempo pro Materialize carregar)
        setTimeout(() => this.initSidenav(), 500);
        // função para controlar o Foco da página apos troca de rotas
        this.setupFocusManagement();
      }
    });
  }

  private setupFocusManagement() {
    // filtro para pegar eventos (quando a nav termina)
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

  // inicializa o menu lateral
  private initSidenav() {
    // verifica se o Materialize carregou, quando ele carrega o clear para o loop
    const waitForM = setInterval(() => {
      if (typeof M !== 'undefined') {
        clearInterval(waitForM);
        // seleçao de elementos na DOM
        const sidenavElement = document.querySelector('.sidenav');
        const trigger = document.querySelector('.sidenav-trigger');

        // inicializar side nav setando aria-hidden = true
        sidenavElement?.setAttribute('aria-hidden', 'true');

        // inicializa os links com tabindex -1 para "esconder"
        const links = sidenavElement?.querySelectorAll('a');
        links?.forEach(link => link.setAttribute('tabindex', '-1'))
      
      if (sidenavElement) {
        // inicializa o Menu
        this.sidenavInstance = M.Sidenav.init(sidenavElement, {
          edge: 'right',
          draggable: true,
          
          // quando aberto
          onOpenStart: () => {
            // set aria-hidden para falso (...)
            sidenavElement.setAttribute('aria-hidden', 'false');
            trigger?.setAttribute('aria-expanded', 'true');
            // tira o tabindex dos links de nav
            const links = sidenavElement.querySelectorAll('a');
            links.forEach(link => link.removeAttribute('tabindex'));
            
            // quando o menu abre o foco é colocado no primeiro link
            const firstLink = sidenavElement.querySelector('a');
            setTimeout(() => (firstLink as HTMLElement)?.focus(), 100);
          },

          // quando fechado
          onCloseEnd: () => {
            // set aria-hidden para true (...)
            sidenavElement.setAttribute('aria-hidden', 'true');
            trigger?.setAttribute('aria-expanded', 'false');
            // pega os links da nav e coloca tabindex -1 para "esconder"
            const links = sidenavElement.querySelectorAll('a');
            links.forEach(link => link.setAttribute('tabindex', '-1'));
          }
        });
        
        // Adiciona listener manual no botão
        if (trigger) {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (this.sidenavInstance) {
              this.sidenavInstance.open();
            }
          });
        }
        
       // console.log('Sidenav OK');
      }
    }
  }, 100);
  
  setTimeout(() => clearInterval(waitForM), 5000);
}
}