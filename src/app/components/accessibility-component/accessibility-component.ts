import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AccessibilityService } from '../../services/accessibility-service';

const WCAG_ATRIBUTOS_MAP: Record<string, Record<string, string>> = {
  'Audiodescricao para video':                  { role: 'region', 'aria-label': 'Vídeo com audiodescrição' },
  'Controle de audio':                          { 'aria-label': 'Controles de áudio' },
  'Semantica de botao':                         { role: 'button' },
  'Proposito do botao':                         { 'aria-label': 'Botão de ação' },
  'Area de acionamento minima':                 { 'aria-label': 'Área clicável' },
  'Controles com retorno':                      { 'aria-live': 'polite' },
  'Semantica de cabecalho':                     { role: 'heading', 'aria-level': '2' },
  'Texto alternativo para imagens de conteudo': { role: 'img', 'aria-label': 'Imagem do conteúdo' },
  'Indicador de foco visivel':                  { tabindex: '0' },
  'Ordem de foco previsivel':                   { tabindex: '0' },
  'Uso de foco':                                { tabindex: '0' },
  'Proposito do link no contexto':              { role: 'link', 'aria-label': 'Link de navegação' },
  'Links para sites externos':                  { 'aria-label': 'Abre em nova aba' },
  'Semantica de regiao':                        { role: 'region', 'aria-label': 'Região de conteúdo' },
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
  template: ''
})
export class AccessibilityComponent implements OnInit {

  @Input() idConteudo!: number;
  @Input() elementoAlvo!: HTMLElement;
  @Input() conteudo!: any; // recebe o conteudoDetalhado completo

  constructor(
    private renderer: Renderer2,
    private accessibilityService: AccessibilityService
  ) {}

  ngOnInit() {
    
    if (!this.idConteudo || !this.elementoAlvo) return;

    this.accessibilityService.obterCriterios(this.idConteudo).subscribe(criterios => {

      // 1. injeta atributos ARIA no container
      criterios.forEach(criterio => {
        const atributos = WCAG_ATRIBUTOS_MAP[criterio.subcategoria];
        if (!atributos) return;

        Object.entries(atributos).forEach(([attr, valor]) => {
          this.renderer.setAttribute(this.elementoAlvo, attr, valor);
        });
      });

      // 2. cria e injeta os campos dinamicamente
      CAMPOS.forEach(campo => {
        const valor = this.conteudo?.[campo.chave];
          console.log(`Campo: ${campo.chave} | Valor: ${valor}`); // ← verifica o que chega

        if (valor == null) return;

        // label
        const label = this.renderer.createElement('label');
        this.renderer.setProperty(label, 'textContent', `${campo.label}:`);
        this.renderer.setAttribute(label, 'for', campo.chave);

        // textarea
        const textarea = this.renderer.createElement('textarea');
        this.renderer.setAttribute(textarea, 'id', campo.chave);
        this.renderer.setAttribute(textarea, 'readonly', 'true');
        this.renderer.setAttribute(textarea, 'aria-label', campo.label);
        this.renderer.setProperty(textarea, 'value', String(valor));
        this.renderer.setStyle(textarea, 'overflow', 'hidden');
        this.renderer.setStyle(textarea, 'resize', 'none');
        // pega o botão que já está no container
        const botao = this.elementoAlvo.querySelector('button');
        
        // aplica CSS WCAG se houver (ex: espaçamento)
        criterios.forEach(criterio => {
          const estilos = WCAG_CSS_MAP[criterio.subcategoria];
          if (!estilos) return;
          Object.entries(estilos).forEach(([prop, val]) => {
            this.renderer.setStyle(textarea, prop, val);
          });
        });

        // auto-resize após renderizar
        setTimeout(() => {
          textarea.style.height = textarea.scrollHeight + 'px';
        });

        this.renderer.insertBefore(this.elementoAlvo, label, botao);
        this.renderer.insertBefore(this.elementoAlvo, textarea, botao);
      });
    });
  }
}