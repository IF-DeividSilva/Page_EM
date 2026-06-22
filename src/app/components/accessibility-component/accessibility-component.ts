import { Component, Input, OnInit, Renderer2, ViewContainerRef, ComponentRef , Injector} from '@angular/core';
import { AccessibilityService } from '../../services/accessibility-service';
import { ButtonComponent } from '../button-component/button-component';
import { CommonModule } from '@angular/common';
import { ReadingOrderComponent } from '../reading-order-component/reading-order-component';
import { VideoComponent } from '../video-component/video-component';
import { ControlComponent } from '../control-component/control-component';
import { ImageComponent } from '../image-component/image-component';

// IDs que acionam o componente de botão
const IDS_BOTAO = [5, 6, 7, 8];
// IDs que acionam o componente de ordem de leitura e foco previsível
const IDS_ORDEM_LEITURA = [14, 22];
// IDs que acionam o componente de vídeo 
const IDS_VIDEO = [1];
// IDs que acionam o componente de controle de áudio
const IDS_CONTROLE_AUDIO = [2];
// IDs que acionam o componente de imagem
const IDS_IMAGEM = [18];

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [CommonModule, ButtonComponent, VideoComponent, ControlComponent],
  template: ''
})
export class AccessibilityComponent implements OnInit {

  @Input() idConteudo!: number;
  @Input() elementoAlvo!: HTMLElement;
  @Input() conteudo!: any;

  constructor(
    private renderer: Renderer2,
    private accessibilityService: AccessibilityService,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector 
  ) {}
  
  ngOnInit() {
    if (!this.elementoAlvo || !this.conteudo) return;
    
    const ids: number[] = (this.conteudo?.WCAG ?? []).flatMap((w: any) => w.WCAG_id);
    
    this.accessibilityService.obterCriterios(ids).subscribe(criterios => {
      
      // 1. Verifica se tem critérios de controle de áudio e injeta o ControlComponent (Criterio 2)
      const temControleAudio = criterios.some(c => IDS_CONTROLE_AUDIO.includes(c.id));

      // 2. Verifica se tem critérios de ordem de leitura e foco previsivel e injeta o reading order (Criterios 14 e 22)
      const temOrdemLeitura = criterios.some(c => IDS_ORDEM_LEITURA.includes(c.id));
      if (temOrdemLeitura) {
        const ref = this.viewContainerRef.createComponent(ReadingOrderComponent);
        ref.setInput('conteudo', this.conteudo);
        this.renderer.appendChild(this.elementoAlvo, ref.location.nativeElement);
      }
    
    
    // 3. Audio .wav
    //  Verifica se tem critérios de botão e se tem audio e injeta o ButtonComponent (Criterios 5, 6, 7, 8)
    const temBotaoAudio = this.conteudo.tem_audio && criterios.some(c => IDS_BOTAO.includes(c.id));
    if (temBotaoAudio ) {
      const botaoRef = this.viewContainerRef.createComponent(ButtonComponent, { injector: this.injector });
      botaoRef.setInput('itemId', this.conteudo.id_conteudo_pk);
      this.renderer.appendChild(this.elementoAlvo, botaoRef.location.nativeElement);

      if (temControleAudio) {
        const controlRef = this.viewContainerRef.createComponent(ControlComponent, { injector: this.injector });
        controlRef.setInput('mediaEl', botaoRef.instance.audioElement);
        controlRef.setInput('tipo', 'audio');
        this.renderer.appendChild(this.elementoAlvo, controlRef.location.nativeElement);
      }

      const speechRef = this.viewContainerRef.createComponent(ButtonComponent, { injector: this.injector });
      speechRef.setInput('tipo', 'speech');
      speechRef.setInput('texto', this.conteudo.conteudo ?? '');
      this.renderer.appendChild(this.elementoAlvo, speechRef.location.nativeElement);

      if (temControleAudio) {
        const speechControlRef = this.viewContainerRef.createComponent(ControlComponent, { injector: this.injector });
        speechControlRef.setInput('tipo', 'speech');
        speechControlRef.setInput('texto', this.conteudo.conteudo ?? '');
        this.renderer.appendChild(this.elementoAlvo, speechControlRef.location.nativeElement);
      }
  
    }

    // 4. Video .mp4, .webm, .ogg 
    const isVideo = (arquivo: string) => /\.(mp4|webm|ogg)$/i.test(arquivo);
    // Verifica se tem critérios de vídeo e injeta o VideoComponent (Criterio 1)
    // verifica se tem critérios de botão para injetar o ButtonComponent (Criterio 5, 6, 7, 8) 
    // e se tem controle de áudio para injetar o ControlComponent (Criterio 2)
    const temVideo = criterios.some(c => IDS_VIDEO.includes(c.id)) && temControleAudio && isVideo(this.conteudo.arquivo);
    const temBotaoVideo = criterios.some(c => IDS_BOTAO.includes(c.id)) && (temVideo);
    if (temVideo) {
      const videoRef = this.viewContainerRef.createComponent(VideoComponent, { injector: this.injector });
      videoRef.setInput('conteudo', this.conteudo);
      this.renderer.appendChild(this.elementoAlvo, videoRef.location.nativeElement);
      videoRef.changeDetectorRef.detectChanges(); // força renderizar o template

      const videoEl = videoRef.location.nativeElement.querySelector('video'); // ← pega após detectChanges
      console.log('videoEl:', videoEl);

      if (temBotaoVideo && videoEl) {
        const botaoVideoRef = this.viewContainerRef.createComponent(ButtonComponent, { injector: this.injector });
        botaoVideoRef.setInput('mediaEl', videoEl, );
        botaoVideoRef.setInput('tipo', 'video');
        this.renderer.appendChild(this.elementoAlvo, botaoVideoRef.location.nativeElement);

        if (temControleAudio) {
          const controlRef = this.viewContainerRef.createComponent(ControlComponent, { injector: this.injector });
          controlRef.setInput('mediaEl', videoEl);
          this.renderer.appendChild(this.elementoAlvo, controlRef.location.nativeElement);
        }
      }
    }

      const isImagem = (arquivo: string) => /\.(jpg|jpeg|png|gif|webp)$/i.test(arquivo);
      // 6 - Verifica se tem critérios de imagem e injeta o ImageComponent (Criterio 18)
      const temImagem = criterios.some(c => IDS_IMAGEM.includes(c.id) && isImagem(this.conteudo.arquivo));
      if (temImagem) {
        const ref = this.viewContainerRef.createComponent(ImageComponent, {
          injector: this.injector
        });
        ref.setInput('conteudo', this.conteudo);
        this.renderer.appendChild(this.elementoAlvo, ref.location.nativeElement);
} 

console.log('tem_audio:', this.conteudo.tem_audio);
console.log('temBotao:', temBotaoAudio);
console.log('temVideo:', temVideo);
console.log('criterios:', criterios.map(c => c.id));
console.log('tem imagem:', temImagem);

    });
  }
}