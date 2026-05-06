import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcervoService } from '../../services/acervo-service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-component.html',
  styleUrl: './video-component.css'
})

export class VideoComponent {
 // @ViewChild('videoEl') videoElRef!: ElementRef<HTMLVideoElement>;
  @Input() conteudo!: any;

  reproduzindo = false;

  constructor(private acervoService: AcervoService) {}

  get videoUrl(): string {
    return `${this.acervoService.acervoRaw}/${this.conteudo.categoria}/${this.conteudo.arquivo}`;
  }

 // get videoElement(): HTMLVideoElement {
   // return this.videoElRef.nativeElement;
  //}

  get descId(): string {
    return `desc-video-${this.conteudo.id_conteudo_pk}`;
  }
}