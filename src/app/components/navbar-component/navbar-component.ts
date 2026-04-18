import { Component, PLATFORM_ID, inject, afterNextRender } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { A11yModule } from '@angular/cdk/a11y';

declare var M: any;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, A11yModule],
  templateUrl: './navbar-component.html', 
  styleUrls: ['./navbar-component.css']

})
export class NavbarComponent {

  public router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private sidenavInstance: any;

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
      if (this.sidenavInstance?.isOpen) {
        this.sidenavInstance.close();
      }

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
        const trigger = document.querySelector('.sidenav-trigger');

        sidenavElement?.setAttribute('aria-hidden', 'true');

        const links = sidenavElement?.querySelectorAll('a');
        links?.forEach(link => link.setAttribute('tabindex', '-1'));

        if (sidenavElement) {
          this.sidenavInstance = M.Sidenav.init(sidenavElement, {
            edge: 'right',
            draggable: true,

            onOpenStart: () => {
              sidenavElement.setAttribute('aria-hidden', 'false');
              trigger?.setAttribute('aria-expanded', 'true');
              const links = sidenavElement.querySelectorAll('a');
              links.forEach(link => link.removeAttribute('tabindex'));
              const firstLink = sidenavElement.querySelector('a');
              setTimeout(() => (firstLink as HTMLElement)?.focus(), 100);
              
              // CERTO: Travar foco na tag MAIN e no FOOTER de verdade
              const main = document.querySelector('main');
              const footer = document.querySelector('footer');
              const navbar = document.querySelector('nav');
              if (navbar) (navbar as HTMLElement).setAttribute('inert', '');
              if (main) (main as HTMLElement).setAttribute('inert', '');
              if (footer) (footer as HTMLElement).setAttribute('inert', '');
            },

            onCloseEnd: () => {
              sidenavElement.setAttribute('aria-hidden', 'true');
              trigger?.setAttribute('aria-expanded', 'false');
              const links = sidenavElement.querySelectorAll('a');
              links.forEach(link => link.setAttribute('tabindex', '-1'));
              
              // CERTO: Liberar foco da tag MAIN e do FOOTER
              const main = document.querySelector('main');
              const footer = document.querySelector('footer');
              const navbar = document.querySelector('nav');
              if (navbar) (navbar as HTMLElement).removeAttribute('inert');
              if (main) (main as HTMLElement).removeAttribute('inert');
              if (footer) (footer as HTMLElement).removeAttribute('inert');
            }
          });

          if (trigger) {
            trigger.addEventListener('click', (e) => {
              e.preventDefault();
              if (this.sidenavInstance) {
                this.sidenavInstance.open();
              }
            });
          }
        }
      }
    }, 100);

    setTimeout(() => clearInterval(waitForM), 5000);
  }
}