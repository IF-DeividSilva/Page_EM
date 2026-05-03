// imagem-component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcervoService } from '../../services/acervo-service';

/**
 * WCAG 18 — Texto alternativo para imagens de conteúdo
 * O alt é preenchido dinamicamente com o campo "conteudo"
 * vindo do banco de dados, que contém a descrição real da imagem.
 */
@Component({
  selector: 'app-imagem-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-component.html',
  styleUrls: ['./image-component.css']
})
export class ImageComponent {
  @Input() conteudo!: any;

  constructor(private acervoService: AcervoService) {}

  get imagemUrl(): string {
    return `${this.acervoService.acervoRaw}/${this.conteudo.categoria}/${this.conteudo.arquivo}`;
  }
}