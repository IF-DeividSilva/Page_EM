import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotComponent } from '../../components/chatbot-component/chatbot-component';


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
  isPlaying = false;

  conteudos: any[] = [];
  carregando = true;
  erro = false;
  acervoRaw: String = '';
  termoBusca: string = '';

  // Injete o AcervoService aqui no construtor
  constructor(private route: ActivatedRoute, private acervoService: AcervoService) {
    this.acervoRaw = this.acervoService.acervoRaw;
  }

ngOnInit() {
    this.acervoService.getTodosConteudos().subscribe({
      next: (dados) => {
        this.conteudos = dados as any[];
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

  toggleAudio() {
    const audio = this.player.nativeElement;
    if (this.isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  
}