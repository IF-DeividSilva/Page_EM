import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcervoService {
  private baseRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Metadados';
  public acervoRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Dados';
  private wcagRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Metadados/metadados_WCAG.json';

  constructor(private http: HttpClient) {}

  getPrincipal() {
    return this.http.get<any>(`${this.baseRaw}/metadados_principal.json`);
  }

  getConteudo(id: number) {
    return this.http.get<any>(`${this.baseRaw}/metadados_conteudos/metadados_conteudo_${id}.json`);
  }

  getWcagMetadados() {
    return this.http.get<any[]>(this.wcagRaw);
  }

  getConteudoComAudio(id: number): Observable<any> {
    return forkJoin({
      principal: this.getPrincipal(),
      conteudo: this.getConteudo(id)
    }).pipe(
      map(({ principal, conteudo }) => {
        const ids = principal.documentos.map((d: any) => d.id_conteudo);
        const comAudio = new Set(
          ids.filter((id: number, index: number) => ids.indexOf(id) !== index)
        );
        return { ...conteudo, tem_audio: comAudio.has(id) };
      })
    );
  }

  getTodosConteudos() {
    return this.getPrincipal().pipe(
      switchMap(response => {
        const documentos = response.documentos;

        // Detecta quais id_conteudo aparecem duplicados → tem áudio
        const ids = documentos.map((d: any) => d.id_conteudo);
        const comAudio = new Set(
          ids.filter((id: number, index: number) => ids.indexOf(id) !== index)
        );

        console.log('ids:', ids);
        console.log('comAudio:', comAudio); 

        // Remove duplicatas para não buscar o mesmo conteúdo duas vezes
        const unicos = documentos.filter((item: any, index: number, arr: any[]) =>
          arr.findIndex(d => d.id_conteudo === item.id_conteudo) === index
        );

        const requisicoes = unicos.map((item: any) =>
          this.getConteudo(item.id_conteudo).pipe(
            map(conteudo => ({
              ...conteudo,
              tem_audio: comAudio.has(item.id_conteudo) // ← injeta o flag
            })),
            catchError(err => {
              console.warn(`Falhou id_conteudo=${item.id_conteudo}:`, err.status, err.url);
              return of(null);
            })
          )
        );

        return forkJoin(requisicoes);
      })
    );
  }
}