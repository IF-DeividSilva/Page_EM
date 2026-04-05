import {
  Component, Input, OnInit, OnDestroy,
  ViewChild, ElementRef, AfterViewChecked,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatbotService } from '../chatbot-component/chatbot-service';
// para o git pages atualizar as respostas do cbot
import { ChangeDetectorRef } from '@angular/core';
declare const M: any;

interface Mensagem {
  role: 'user' | 'assistant';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot-component.html',
  styleUrls: ['./chatbot-component.css'],
})

export class ChatbotComponent implements OnInit, OnDestroy, AfterViewChecked {
  constructor(private chatbotService: ChatbotService, private cdr: ChangeDetectorRef) {}

  @Input() idConteudo!: number;
  @Input() titulo = 'este item';

  @ViewChild('modalEl')      modalEl!: ElementRef;
  @ViewChild('msgContainer') msgContainer!: ElementRef;

  mensagens: Mensagem[] = [];
  userInput    = '';
  isRecording  = false;
  speechOk     = false;         // browser suporta Web Speech API?
  erroMic      = '';            // mensagem de erro do microfone

  private modalInstance: any;
  private recognition:   any;
  private shouldScroll = false;

  ngOnInit() {
    this.mensagens.push({
      role: 'assistant',
      text: `Olá! Posso responder dúvidas sobre o conteúdo "${this.titulo}". O que você quer saber?`,
    });

    this.inicializarMicrofone();
  }

  ngAfterViewInit() {
    this.modalInstance = M.Modal.init(this.modalEl.nativeElement, {
      dismissible: true,
    });
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
    this.recognition.continuous     = true;  // para após uma frase
    this.recognition.interimResults = false;  // só resultado final

    // Quando o usuário terminar de falar
    this.recognition.onresult = (event: any) => {
      const texto = event.results[0][0].transcript;
      this.userInput   = texto;
      this.isRecording = false;
      this.erroMic     = '';
      this.send(); // envia automaticamente
    };

    // Se o usuário negar permissão ou ocorrer outro erro
    this.recognition.onerror = (event: any) => {
      this.isRecording = false;

      if (event.error === 'not-allowed') {
        this.erroMic = 'Permissão de microfone negada. Verifique as configurações do navegador.';
      } else if (event.error === 'no-speech') {
        this.erroMic = 'Nenhuma fala detectada. Tente novamente.';
      } else {
        this.erroMic = 'Erro ao usar o microfone. Tente novamente.';
      }

      // Limpa o erro após 4 segundos
      setTimeout(() => this.erroMic = '', 4000);
    };

    // Quando parar de ouvir por qualquer motivo
    this.recognition.onend = () => {
      this.isRecording = false;
    };
  }

  toggleMic() {
    if (this.isRecording) {
      this.recognition.stop();
      this.isRecording = false;
    } else {
      this.erroMic     = '';
      this.isRecording = true;
      this.recognition.start();
    }
  }

  // ------------------------------------------------------------------
  // Modal
  // ------------------------------------------------------------------

  open()  { this.modalInstance?.open(); }
  close() { this.modalInstance?.close(); }

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

    try {
      const resposta = await this.chatbotService.ask(pergunta, this.idConteudo);
      this.mensagens.push({ role: 'assistant', text: resposta });
    } catch {
      this.erro = 'Não foi possível obter uma resposta. Tente novamente.';
    } finally {
      this.loading      = false;
      this.shouldScroll = true;
      this.cdr.detectChanges();
    }
  }
}