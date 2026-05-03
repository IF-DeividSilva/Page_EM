import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AcervoService } from '../../services/acervo-service';
import { AccessibilityComponent } from '../../components/accessibility-component/accessibility-component';

@Component({
  selector: 'app-detalhes-component',
  standalone: true,
  imports: [RouterLink, CommonModule, AccessibilityComponent],
  templateUrl: './detalhes-component.html',
  styleUrl: './detalhes-component.css'
})
export class DetalhesComponent implements OnInit, AfterViewInit {

  @ViewChild('tituloItem') tituloElement!: ElementRef;

  itemId: number | null = null;
  conteudoDetalhado: any;

  private readonly baseRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Dados';

  constructor(
    private route: ActivatedRoute,
    private acervoService: AcervoService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));

    this.acervoService.getConteudoComAudio(this.itemId).subscribe(dados => {
      this.conteudoDetalhado = dados;

      setTimeout(() => {
        if (this.tituloElement) {
          this.tituloElement.nativeElement.focus();
        }
      }, 500);
    });
  }

  ngAfterViewInit(): void {}

  isPDF(): boolean {
    return /\.pdf$/i.test(this.conteudoDetalhado?.arquivo || '');
  }

  obterUrlPDFViewer(): SafeResourceUrl {
    if (!this.conteudoDetalhado?.arquivo) 
      return this.sanitizer.bypassSecurityTrustResourceUrl('');
    const pdfUrl = `${this.baseRaw}/${this.conteudoDetalhado.categoria}/${this.conteudoDetalhado.arquivo}`;
    const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(viewerUrl);
  }
}