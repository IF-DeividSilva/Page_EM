import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
            <footer class="page-footer cyan lighten-1" aria-label="Rodapé do site">
              <div class="container">
                <div class="row">
                  <div class="col l6 s12">
                    <div class="row valign-wrapper">
                      <div class="col s6 center-align">
                        <p class="black-text">EcoMuseu do Boné</p>
                        <img src="../assets/logo-ecomuseu.png" alt="Logo do EcoMuseu do Boné" class="responsive-img" style="max-width: 100px;">
                      </div>
                      <div class="col s6 center-align">
                        <p class="black-text">Em parceria com:</p>
                        <img src="../assets/apl.jpg" alt="Logo do APL Bonés de Apucarana" class="responsive-img" style="max-width: 100px;">
                      </div>
                    </div>
                  </div>
                  <div class="col l4 offset-l2 s12">
                    <section aria-label="Links externos">
                      <h5 class="black-text" id="footer-links-title">Links</h5>
                      <ul aria-labelledby="footer-links-title">
                        <li><a class="black-text" href="https://www.instagram.com/ecomuseudobone/" aria-label="Instagram do EcoMuseu do Boné (abre em nova aba)">Instagram</a></li>
                        <li><a class="black-text" href="https://linktr.ee/ecomuseudobone?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn5XoysEzuazQzQWIW3_uBx004LZy5UoAreTOt8WnuqMpiZb1TojST6BkgLb0_aem_yXNLIZ0MPafj6K2Npr3Www" aria-label="Linktree do EcoMuseu do Boné (abre em nova aba)">Linktree</a></li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
              <div class="footer-copyright">
                <div class="container">
                  © 2026 EcoMuseu do Boné - Todos os direitos reservados
                </div>
              </div>
            </footer>
  `,
  styleUrl: './footer-component.css'
})
export class FooterComponent {}
