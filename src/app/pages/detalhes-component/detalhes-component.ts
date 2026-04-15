import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AcervoService } from '../../services/acervo-service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AccessibilityComponent } from '../../components/accessibility-component/accessibility-component';

@Component({
  selector: 'app-detalhes-component',
  imports: [RouterLink, CommonModule , TextFieldModule, AccessibilityComponent],
  templateUrl: './detalhes-component.html',
  styleUrl: './detalhes-component.css'
})
export class DetalhesComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private acervoService: AcervoService, private sanitizer: DomSanitizer) {}

  itemId: number | null = null;
  conteudoDetalhado: any;
  reproduzindo = false;
  private reproducao: HTMLAudioElement | null = null;
  private readonly baseRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Dados';

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    this.acervoService.getConteudo(this.itemId).subscribe(dados => {
      this.conteudoDetalhado = dados;
    });
  }

  get audioUrl(): string {
    return `${this.baseRaw}/Audios/audio_${this.itemId}.wav`;
  }

  obterUrlArquivo(): string {
    if (!this.conteudoDetalhado?.arquivo) return '';
    return `${this.baseRaw}/${this.conteudoDetalhado.categoria}/${this.conteudoDetalhado.arquivo}`;
  }

  isImagem(): boolean {
    const arquivo = this.conteudoDetalhado?.arquivo || '';
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(arquivo);
  }

  isPDF(): boolean {
    const arquivo = this.conteudoDetalhado?.arquivo || '';
    return /\.pdf$/i.test(arquivo);
  }

  isVideo(): boolean {
    const arquivo = this.conteudoDetalhado?.arquivo || '';
    return /\.(mp4|webm|ogg)$/i.test(arquivo);
  }

  obterUrlPDFViewer(): SafeResourceUrl {
    if (!this.conteudoDetalhado?.arquivo) return this.sanitizer.bypassSecurityTrustResourceUrl('');
    const pdfUrl = `${this.baseRaw}/${this.conteudoDetalhado.arquivo}`;
    // Usar Google Docs Viewer para melhor visualização
    const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl);
  }

  toggleReproducao() {
    if (!this.reproducao) {
      this.reproducao = new Audio(this.audioUrl);
      this.reproducao.addEventListener('ended', () => {
        this.reproduzindo = false;
      });
    }

    if (this.reproduzindo) {
      this.reproducao.pause();
      this.reproduzindo = false;
    } else {
      this.reproducao.play();
      this.reproduzindo = true;
    }
  }

  ngOnDestroy(): void {
    this.reproducao?.pause();
    this.reproducao = null;
  }
}