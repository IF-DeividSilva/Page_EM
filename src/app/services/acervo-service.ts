import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AcervoService {
  // endereço do repositorio
  private baseRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Metadados';
  public acervoRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Dados';
  private wcagRaw = 'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Metadados/metadados_WCAG.json';

  constructor(private http: HttpClient) {}

  getPrincipal() {
    return this.http.get<any>(`${this.baseRaw}/metadados_principal.json`);
  }

  getConteudo(id: number) {
    return this.http.get<any>(`${this.baseRaw}/metadados_conteudos/conteudo_${id}.json`);
  }

  getWcagMetadados() {
    return this.http.get<any[]>(this.wcagRaw);
  }

 // getAcervo(arquivo: string){
 //   return this.http.get<any>(`${this.acervoRaw}/${arquivo}`)
 // }

 // getWCAG(id: number){
 //   return this.http.get<any>(`${this.baseRaw}/metadados_conteudos/conteudo_${id}.json`);
 // }
  // 
  getTodosConteudos() {
    return this.getPrincipal().pipe(
      switchMap(response => {
        const requisicoes = response.documentos.map((item: any) => 
          this.getConteudo(item.id_conteudo)
        //  this.getAcervo(item.documento.arquivo)
        );
        return forkJoin(requisicoes);
      })
    );
  }

}