import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AcervoService } from '../../services/acervo-service'; 

@Injectable({ providedIn: 'root' })
export class ChatbotService {

  private cache = new Map<number, any>();

  constructor(private acervoService: AcervoService) {}

  async ask(pergunta: string, idConteudo: number): Promise<string> {

    // Usa o getConteudo() que já existe no AcervoService
    if (!this.cache.has(idConteudo)) {
      const dados = await firstValueFrom(
        this.acervoService.getConteudo(idConteudo)
      );
      this.cache.set(idConteudo, dados);
    }

    const conteudo = this.cache.get(idConteudo)!;

    const contexto = [
      conteudo.titulo  !== 'Sem titulo'    ? `Título: ${conteudo.titulo}`   : null,
      conteudo.autor   !== 'Anonimo'       ? `Autor: ${conteudo.autor}`     : null,
      conteudo.ano     !== 'Nao informado' ? `Ano: ${conteudo.ano}`         : null,
      `Categoria: ${conteudo.categoria}`,
      conteudo.assunto !== 'Sem assunto'   ? `Assunto: ${conteudo.assunto}` : null,
      `Descrição: ${conteudo.conteudo}`,
    ]
      .filter(Boolean)
      .join('\n');

const res = await fetch('https://api.cohere.com/v2/chat', {
  method: 'POST',
  headers: {
    Authorization:  `Bearer ${environment.cohereApiKey}`,
    'Content-Type': 'application/json',
  },
body: JSON.stringify({
  model: 'command-r-plus-08-2024',
  messages: [
    {
      role:    'system',
      content: `Você é um assistente do Ecomuseu universitário.
      Responda APENAS com base no documento fornecido sobre este item do acervo.
      Responda em português, de forma clara e acessível para qualquer público.
      Se a informação não estiver no documento, diga educadamente que não tem essa informação.
      Não invente dados como datas, nomes ou locais que não estejam descritos.`,
    },
    {
      role:    'user',
      content: pergunta,
    }
  ],
  documents: [
    {
    data: {
      id:      String(conteudo.id_conteudo_pk),
      title:   conteudo.titulo,
      content: contexto,
    }
    },
  ],
}),
});

const data = await res.json();
console.log('Resposta Cohere:', JSON.stringify(data, null, 2));
return data.message.content[0].text;

  }
}