// acess-metadados.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const CAMPOS = [
  { label: 'Autor',     chave: 'autor'     },
  { label: 'Ano',       chave: 'ano'       },
  { label: 'Categoria', chave: 'categoria' },
  { label: 'Assunto',   chave: 'assunto'   },
  { label: 'Conteúdo',  chave: 'conteudo'  },
];

@Component({
  selector: 'app-reading-order-metadados',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section aria-label="Informações do conteúdo" class="metadados">
      <ng-container *ngFor="let campo of campos">
        <p *ngIf="conteudo?.[campo.chave]">
          <strong>{{ campo.label }}:</strong> {{ conteudo[campo.chave] }}
        </p>
      </ng-container>
    </section>
  `
})
export class ReadingOrderComponent {
  @Input() conteudo!: any;
  campos = CAMPOS;
}