import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-acervo-component',
  imports: [RouterLink],
  templateUrl: './acervo-component.html',
  styleUrl: './acervo-component.css'
})
export class AcervoComponent {
  @ViewChild('player') player!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

  constructor(private route: ActivatedRoute) {}

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
