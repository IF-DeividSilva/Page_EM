import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AcervoService } from '../../services/acervo-service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { AccessibilityComponent } from '../../components/accessibility-component/accessibility-component';

@Component({
  selector: 'app-detalhes-component',
  standalone: true, // Adicionado caso esteja usando standalone components
  imports: [RouterLink, CommonModule, TextFieldModule, AccessibilityComponent],
  templateUrl: './detalhes-component.html',
  styleUrl: './detalhes-component.css'
})
// 1. Adicionamos o AfterViewInit aqui na assinatura da classe
export class DetalhesComponent implements OnInit, OnDestroy, AfterViewInit {
  
  // 2. Capturamos o H1 lá do HTML (lembra do #tituloItem ?)
  @ViewChild('tituloItem') tituloElement!: ElementRef;

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
      
      // 3. O Pulo do Gato Assíncrono! 
      // Esperamos os dados chegarem, damos 100ms pro Angular atualizar o H1 na tela, e puxamos o foco!
      setTimeout(() => {
        if (this.tituloElement) {
          this.tituloElement.nativeElement.focus();
        }
      }, 100);
    });
  }

  // O Angular exige que a função exista se você assina o AfterViewInit, 
  // mesmo que a gente tenha usado a lógica lá no ngOnInit
  ngAfterViewInit(): void {
    // Mantemos vazio pois o foco foi movido estrategicamente para dentro do subscribe
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
    const pdfUrl = `${this.baseRaw}/${this.conteudoDetalhado.categoria}/${this.conteudoDetalhado.arquivo}`; // Notei que faltava a categoria na URL do PDF, adicionei aqui por precaução!
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