import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcervoService } from '../../services/acervo-service';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrls: ['./button-component.css']
})
export class ButtonComponent implements OnDestroy {
  @Input() itemId: number | null = null;
  @Input() mediaEl: HTMLMediaElement | null = null; // ← elemento externo (vídeo)
  @Input() tipo: 'audio' | 'video' | 'speech' = 'audio';
  @Input() texto: string = ''; 

  reproduzindo = false;
  private audio: HTMLAudioElement | null = null;

  constructor(private acervoService: AcervoService) {}

  get audioUrl(): string {
    return `${this.acervoService.acervoRaw}/Audios/audio_${this.itemId}.wav`;
  }

  // Expõe o elemento de áudio interno para o ControlComponent
  get audioElement(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(this.audioUrl);
      this.audio.onended = () => { this.reproduzindo = false; };
    }
    return this.audio;
  }

  toggleReproducao() {
    // Caso Spreech API
    if (this.tipo === 'speech') {
      this.toggleSpeech();
      return;
    }

    // Se tiver mediaEl externo (vídeo), usa ele
    // Senão cria/usa o áudio interno (.wav)
    const el: HTMLMediaElement = this.mediaEl ?? this.audioElement;
    this.reproduzindo ? el.pause() : el.play();
    this.reproduzindo = !this.reproduzindo;
  }

  private toggleSpeech() {
    if (!('speechSynthesis' in window)) return; // API não suportada
      if (this.reproduzindo) {
        speechSynthesis.pause();
        this.reproduzindo = false;
        return;
      }
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
        this.reproduzindo = true;
        return;
      }
          // Inicia nova leitura
    speechSynthesis.cancel();
    const fala = new SpeechSynthesisUtterance(this.texto);
    fala.lang = 'pt-BR';
    fala.rate = 1;
    fala.onstart = () => { this.reproduzindo = true; };
    fala.onend   = () => { this.reproduzindo = false; };
    fala.onerror = () => { this.reproduzindo = false; };
    speechSynthesis.speak(fala);
  }

  ngOnDestroy() {
    this.audio?.pause();
    this.audio = null;
    if (this.tipo === 'speech') speechSynthesis.cancel();
  }
}