import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from '../../components/chatbot-component/chatbot-component';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AcervoService } from '../../services/acervo-service';

@Component({
  selector: 'app-acervo-component',
  standalone: true,
  imports: [RouterLink, CommonModule, ChatbotComponent, FormsModule],
  templateUrl: './acervo-component.html',
  styleUrls: ['./acervo-component.css']
})
export class AcervoComponent implements OnInit{
  @ViewChild('player') player!: ElementRef<HTMLAudioElement>;
  @ViewChild('cardSection') cardSection!: ElementRef<HTMLDivElement>;
  isPlaying = false;

  conteudos: any[] = [];
  carregando = true;
  erro = false;
  acervoRaw: String = '';
  termoBusca: string = '';
  paginaAtual = 1;
  itensPorPagina = 5;

  private searchTimeout: any;


  constructor(private route: ActivatedRoute, private acervoService: AcervoService, private liveAnnouncer: LiveAnnouncer) {
    this.acervoRaw = this.acervoService.acervoRaw;
  }

ngOnInit() {
    this.acervoService.getTodosConteudos().subscribe({
      next: (dados) => {
        this.conteudos = (dados as any[]).filter(item => item !== null);
        this.carregando = false;
        document.getElementById('acervo')?.setAttribute('aria-busy', 'false');
      },
      error: (err) => {
        console.error('Erro ao carregar acervo:', err);
        this.erro = true;
        this.carregando = false;
        document.getElementById('acervo')?.setAttribute('aria-busy', 'false');
      }
    });
}

  get conteudosFiltrados(): any[] {
    if (!this.termoBusca.trim()) {
      return this.conteudos;
    }
    return this.conteudos.filter(item =>
      item.titulo.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  get totalPaginas(): number {
    return Math.ceil(this.conteudosFiltrados.length / this.itensPorPagina);
  }

  get numeroPaginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  get conteudosPaginados(): any[] {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.conteudosFiltrados.slice(inicio, fim);
  }

  irParaPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
      // Move o foco para cima dos cards
      setTimeout(() => {
        if (this.cardSection) {
          this.cardSection.nativeElement.focus();
          this.cardSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    }
  }

  onSearchChange(novoTermo: string) {
    this.termoBusca = novoTermo;
    this.paginaAtual = 1; // Reset para página 1 quando buscar

    // Se o usuário digitar outra letra rápido, cancela o aviso anterior
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Espera o usuário dar uma pausa de 800ms na digitação para falar
    this.searchTimeout = setTimeout(() => {
      const total = this.conteudosFiltrados.length;
      
      if (novoTermo.trim() === '') {
        this.liveAnnouncer.announce('Busca limpa. Mostrando todo o acervo.', 'polite');
      } else if (total === 0) {
        // 'assertive' fala imediatamente, cortando outras falas, pois é um erro
        this.liveAnnouncer.announce(`Nenhum item encontrado para ${novoTermo}.`, 'assertive');
      } else {
        // 'polite' espera o leitor terminar de falar a letra digitada para avisar o total
        this.liveAnnouncer.announce(`${total} itens encontrados.`, 'polite');
      }
    }, 800);
  }

  toggleAudio() {
    const audio = this.player.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  // Função para remover quebras de linha e sujeiras do banco de dados
  limparTextoAssistivo(texto: string): string {
    if (!texto) return '';
    
    // 1. Remove qualquer tag HTML (tipo <br> ou <b>) que possa estar escondida no banco
    let textoLimpo = texto.replace(/<[^>]*>?/gm, '');
    
    // 2. Troca múltiplos espaços, Tabs e Enters por um único espaço
    textoLimpo = textoLimpo.replace(/\s+/g, ' ').trim();
    
    // 3. O Pulo do Gato: Se o título for gigantesco, a gente corta ele. 
    // O TalkBack não precisa ler 200 caracteres no botão, ele só precisa saber do que se trata.
    if (textoLimpo.length > 60) {
      return textoLimpo.substring(0, 60) + '...';
    }
    
    return textoLimpo;
  }

  
}