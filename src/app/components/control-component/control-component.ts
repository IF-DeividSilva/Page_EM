import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-component.html'
})
export class ControlComponent implements OnInit {

  @Input() conteudo!: any;
  @Input() elementoAlvo!: HTMLElement;

  reproduzindoVideo = false;
  volumeVideo = 1;
  private videoEl: HTMLVideoElement | null = null;

  ngOnInit() {
    // Busca o <video> no container pai
    this.videoEl = this.elementoAlvo.querySelector('video');
    if (this.videoEl) {
      this.videoEl.addEventListener('play',  () => this.reproduzindoVideo = true);
      this.videoEl.addEventListener('pause', () => this.reproduzindoVideo = false);
      this.videoEl.addEventListener('ended', () => this.reproduzindoVideo = false);
    }
  }

  toggleReproducaoVideo() {
    if (!this.videoEl) return;
    this.reproduzindoVideo ? this.videoEl.pause() : this.videoEl.play();
  }

  atualizarVolumeVideo(valor: string) {
    this.volumeVideo = parseFloat(valor);
    if (this.videoEl) this.videoEl.volume = this.volumeVideo;
  }

}