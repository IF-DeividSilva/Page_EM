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
  @Input() itemId!: number;
  @Input() temControles: boolean = false;

  reproduzindo = false;
  volume = 1;
  private audio: HTMLAudioElement | null = null;

  constructor(private acervoService: AcervoService) {}

  get audioUrl(): string {
    return `${this.acervoService.acervoRaw}/Audios/audio_${this.itemId}.wav`;
  }

  toggleReproducao() {
    if (!this.audio) {
      this.audio = new Audio(this.audioUrl);
      this.audio.onended = () => { this.reproduzindo = false; };
    }
    this.reproduzindo ? this.audio.pause() : this.audio.play();
    this.reproduzindo = !this.reproduzindo;
  }

  atualizarVolume(valor: string) {
    this.volume = parseFloat(valor);
    if (this.audio) this.audio.volume = this.volume;
  }

  ngOnDestroy() {
    this.audio?.pause();
    this.audio = null;
  }
}