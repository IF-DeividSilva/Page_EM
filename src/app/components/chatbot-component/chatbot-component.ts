import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ElementRef, AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../../services/chatbot-service';
// para o git pages atualizar as respostas do cbot
import { ChangeDetectorRef } from '@angular/core';
import { LiveAnnouncer, A11yModule  } from '@angular/cdk/a11y';
declare const M: any;

interface Mensagem {
  role: 'user' | 'assistant';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, A11yModule],
  templateUrl: './chatbot-component.html',
  styleUrls: ['./chatbot-component.css'],

})

export class ChatbotComponent implements OnInit, OnDestroy, AfterViewChecked {
  constructor(
    private chatbotService: ChatbotService, 
    private cdr: ChangeDetectorRef,
    private liveAnnouncer: LiveAnnouncer,
    private hostRef: ElementRef
  ) {}

  @Input() idConteudo!: number;
  @Input() titulo = 'este item';

  @ViewChild('modalEl')      modalEl!: ElementRef;
  @ViewChild('msgContainer') msgContainer!: ElementRef;

  mensagens: Mensagem[] = [];
  userInput    = '';
  isRecording  = false;
  speechOk     = false;         // browser suporta Web Speech API?
  erroMic      = '';            // mensagem de erro do microfone
  isOpen = false;

  private modalInstance: any;
  private recognition:   any;
  private shouldScroll = false;


  ngOnInit() {
    const mensagemInicial = `Olá! Posso responder dúvidas sobre o conteúdo "${this.titulo}". O que você quer saber?`;
    this.mensagens.push({
      role: 'assistant',
      text: mensagemInicial,
    });

    this.inicializarMicrofone();
  }


  ngAfterViewChecked() {
    if (this.shouldScroll) {
      const el = this.msgContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
      this.shouldScroll = false;
    }
  }

  ngOnDestroy() {
    this.modalInstance?.destroy();
    this.recognition?.abort(); // garante que para de ouvir ao destruir
  }

  // ------------------------------------------------------------------
  // Microfone
  // ------------------------------------------------------------------

  private inicializarMicrofone() {
    // Web Speech API — suportada no Chrome, Edge e Safari
    // No Firefox desktop ainda não funciona (junho/2025)
    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SR) {
      // Não suportado — esconde o botão de mic no template
      this.speechOk = false;
      return;
    }

    this.speechOk     = true;
    this.recognition  = new SR();

    this.recognition.lang           = 'pt-BR';
    this.recognition.continuous     = false;  // para após uma frase
    this.recognition.interimResults = true;  // só resultado final

     // Atualiza o input em tempo real enquanto o usuário fala
  this.recognition.onresult = (event: any) => {
    let texto = '';
    for (let i = 0; i < event.results.length; i++) {
      texto += event.results[i][0].transcript;
    }
    this.userInput = texto.trim();
    this.cdr.detectChanges();
  };

  // Quando o browser detectar silêncio e parar sozinho
  this.recognition.onend = () => {
    this.isRecording = false;

    // Se captou algo, envia automaticamente
    if (this.userInput.trim()) {
      this.send();
    }

    this.cdr.detectChanges();
  };

  this.recognition.onerror = (event: any) => {
    this.isRecording = false;

    if (event.error === 'not-allowed') {
      this.erroMic = 'Permissão de microfone negada. Verifique as configurações do navegador.';
    } else if (event.error === 'no-speech') {
      this.erroMic = 'Nenhuma fala detectada. Tente novamente.';
    } else {
      this.erroMic = 'Erro ao usar o microfone. Tente novamente.';
    }
    
    // Anuncia o erro para leitores de tela
    this.liveAnnouncer.announce(this.erroMic, 'assertive');

    setTimeout(() => { this.erroMic = ''; this.cdr.detectChanges(); }, 4000);
  };
}

// Agora o toggleMic só inicia — parar é coisa do browser
toggleMic() {
  if (this.isRecording) return; // ignora clique duplo enquanto grava

  this.userInput   = '';
  this.erroMic     = '';
  this.isRecording = true;
  this.liveAnnouncer.announce('Microfone ativado. Fale sua pergunta.', 'assertive');
  this.recognition.start();
  this.cdr.detectChanges();
}


  // ------------------------------------------------------------------
  // Modal
  // ------------------------------------------------------------------

open() {
  this.isOpen = true;
  this.liveAnnouncer.announce(this.mensagens[0].text, 'polite');

  setTimeout(() => {
    document.querySelector('nav')?.setAttribute('inert', '');
    document.querySelector('footer')?.setAttribute('inert', '');
    document.querySelector('h1')?.setAttribute('inert', '');
    document.querySelector('[role="search"]')?.setAttribute('inert', '');

    // Marca os outros cards
    document.querySelectorAll('[role="listitem"]').forEach(item => {
      if (!item.contains(this.hostRef.nativeElement)) {
        (item as HTMLElement).setAttribute('inert', '');
      }
    });

    // Dentro do card pai, marca tudo exceto o app-chatbot
    const cardEl = this.hostRef.nativeElement.parentElement;
    if (cardEl) {
      cardEl.querySelector('.card-title')?.setAttribute('inert', '');
      cardEl.querySelector('.card-content')?.setAttribute('inert', '');
      cardEl.querySelector('.card-image')?.setAttribute('inert', '');
      cardEl.querySelector('[routerLink]')?.setAttribute('inert', '');
      cardEl.querySelector('.btn.light-green')?.setAttribute('inert', '');
    }
  });
}

close() {
  this.isOpen = false;
  document.querySelectorAll('[inert]').forEach(el => el.removeAttribute('inert'));
}
  // ------------------------------------------------------------------
  // Envio
  // ------------------------------------------------------------------

loading = false; 
erro    = '';

  async send() {
    const pergunta = this.userInput.trim();
    if (!pergunta || this.loading) return;

    this.userInput = '';
    this.erro      = '';
    this.mensagens.push({ role: 'user', text: pergunta });
    this.loading      = true;
    this.shouldScroll = true;
    this.cdr.detectChanges();
    
    // Anuncia que a pergunta foi enviada
    this.liveAnnouncer.announce('Sua pergunta foi enviada. Aguardando resposta...', 'polite');

    try {
      const resposta = await this.chatbotService.ask(pergunta, this.idConteudo);
      this.mensagens.push({ role: 'assistant', text: resposta });
      // Anuncia a resposta para leitores de tela
      this.liveAnnouncer.announce(resposta, 'polite');
    } catch {
      this.erro = 'Não foi possível obter uma resposta. Tente novamente.';
      this.liveAnnouncer.announce(this.erro, 'assertive');
    } finally {
      this.loading      = false;
      this.shouldScroll = true;
      this.cdr.detectChanges();
    }
  }
}