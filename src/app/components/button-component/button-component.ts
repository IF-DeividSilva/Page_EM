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
  @Input() tipo: 'audio' | 'video' = 'audio';

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
    // Se tiver mediaEl externo (vídeo), usa ele
    // Senão cria/usa o áudio interno (.wav)
    const el: HTMLMediaElement = this.mediaEl ?? this.audioElement;
    this.reproduzindo ? el.pause() : el.play();
    this.reproduzindo = !this.reproduzindo;
  }

  ngOnDestroy() {
    this.audio?.pause();
    this.audio = null;
  }
}