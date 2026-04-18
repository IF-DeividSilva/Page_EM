import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility-service';

// 1. Limpeza do Mapa! Removemos o tabindex="0" indiscriminado e regras conflitantes 
// que não devem ser aplicadas a containers de texto.
const WCAG_ATRIBUTOS_MAP: Record<string, Record<string, string>> = {
  'Audiodescricao para video':                  { role: 'region', 'aria-label': 'Vídeo com audiodescrição' },
  'Controle de audio':                          { 'aria-label': 'Controles de áudio' },
  'Semantica de cabecalho':                     { role: 'heading', 'aria-level': '2' },
  'Mensagens de status':                        { role: 'status', 'aria-live': 'polite' },
};

const WCAG_CSS_MAP: Record<string, Record<string, string>> = {
  'Espacamento entre as letras':   { 'letter-spacing': '0.12em' },
  'Espacamento entre as palavras': { 'word-spacing': '0.16em' },
};

const CAMPOS = [
  { label: 'Autor',     chave: 'autor'     },
  { label: 'Ano',       chave: 'ano'       },
  { label: 'Categoria', chave: 'categoria' },
  { label: 'Assunto',   chave: 'assunto'   },
  { label: 'Conteúdo',  chave: 'conteudo'  },
];

@Component({
  selector: 'app-accessibility',
  standalone: true, // Se o seu projeto usar standalone
  template: ''
})
export class AccessibilityComponent implements OnInit {

  @Input() idConteudo!: number;
  @Input() elementoAlvo!: HTMLElement;
  @Input() conteudo!: any; 

  constructor(
    private renderer: Renderer2,
    private accessibilityService: AccessibilityService
  ) {}

  ngOnInit() {
    if (!this.idConteudo || !this.elementoAlvo) return;

    this.accessibilityService.obterCriterios(this.idConteudo).subscribe(criterios => {

      // Injeta atributos ARIA no container
      criterios.forEach(criterio => {
        const atributos = WCAG_ATRIBUTOS_MAP[criterio.subcategoria];
        if (!atributos) return;

        Object.entries(atributos).forEach(([attr, valor]) => {
          this.renderer.setAttribute(this.elementoAlvo, attr, valor);
        });
      });

      const botao = this.elementoAlvo.querySelector('button');

      //  Renderizando Parágrafos Semânticos no lugar de TextAreas
      CAMPOS.forEach(campo => {
        const valor = this.conteudo?.[campo.chave];
        
        // Verifica se tem conteúdo e se não está vazio
        if (valor == null || valor.toString().trim() === '') return;

        // Cria a tag <p>
        const p = this.renderer.createElement('p');
        
        // Cria a tag <strong> para o Label (Ex: "Autor:")
        const strong = this.renderer.createElement('strong');
        this.renderer.setProperty(strong, 'textContent', `${campo.label}: `);
        
        // Cria o nó de texto com o valor do banco de dados
        const textNode = this.renderer.createText(String(valor));

        // Junta tudo: <p><strong>Label: </strong> Valor</p>
        this.renderer.appendChild(p, strong);
        this.renderer.appendChild(p, textNode);

        // Aplica CSS WCAG (ex: espaçamento) diretamente no parágrafo
        criterios.forEach(criterio => {
          const estilos = WCAG_CSS_MAP[criterio.subcategoria];
          if (!estilos) return;
          Object.entries(estilos).forEach(([prop, val]) => {
            this.renderer.setStyle(p, prop, val);
          });
        });

        // Insere na tela antes do botão
        this.renderer.insertBefore(this.elementoAlvo, p, botao);
      });
    });
  }
}