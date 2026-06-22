import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechService } from '../../services/spreech-service';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-component.html',
  styleUrls: ['./control-component.css']
})
export class ControlComponent implements OnInit {

  @Input() mediaEl: HTMLMediaElement | null = null; // ← @Input() público
  @Input() tipo: 'audio' | 'video' | 'speech' = 'audio';
  @Input() texto: string = ''; 


  volume = 1;
  velocidade = 1;

   constructor(private speechService: SpeechService) {}

  ngOnInit() {
    if (this.tipo !== 'speech' && !this.mediaEl) {
      console.warn('ControlComponent: mediaEl não foi passado!');
    }
  }
  // audio/video volume
  atualizarVolume(valor: string) {
    this.volume = parseFloat(valor);
    if (this.tipo == 'speech'){
      this.speechService.volume = this.volume; 
      this.reiniciarSpeech(); // speech só aceita volume no início da fala, então reiniciamos a fala para aplicar o novo volume
      return;
    } 
    
    if(this.mediaEl) {
      this.mediaEl.volume = this.volume;
    }

  }
  

  atualizarVelocidade(valor: string) {

    this.velocidade = parseFloat(valor);

    if (this.tipo === 'speech') {
      this.speechService.velocidade = this.velocidade;
      this.reiniciarSpeech();
      return;
    }

    if (this.mediaEl){
      this.mediaEl.playbackRate = this.velocidade;
    } 
  }
   
  private reiniciarSpeech() {
    if (!('speechSynthesis' in window)) return; // API não suportada

    const estaFalando = speechSynthesis.speaking && !speechSynthesis.paused;
    speechSynthesis.cancel(); // Para fala atual

    if (estaFalando && this.texto) {
      const fala = new SpeechSynthesisUtterance(this.texto);
      fala.lang = 'pt-BR';
      fala.rate = this.speechService.velocidade;
      fala.volume = this.speechService.volume;
      speechSynthesis.speak(fala);
    } 
  }
}