import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-component.html'
})
export class ControlComponent implements OnInit {

  @Input() mediaEl!: HTMLMediaElement; // ← @Input() público
  @Input() tipo: 'audio' | 'video' = 'video';

  volume = 1;

  ngOnInit() {
    if (!this.mediaEl) {
      console.warn('ControlComponent: mediaEl não foi passado!');
    }
  }

  atualizarVolume(valor: string) {
    this.volume = parseFloat(valor);
    if (this.mediaEl) this.mediaEl.volume = this.volume;
  }
}