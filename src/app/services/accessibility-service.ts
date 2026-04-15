import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AcervoService } from '../services/acervo-service';

export interface WCAGMetadado {
  WCAG_id_pk: number;
  WCAG_categoria: string;
  WCAG_id_subcategoria: string;
}

export interface WCAGResolucao {
  id: number;
  categoria: string;
  subcategoria: string;
}

@Injectable({ providedIn: 'root' })
export class AccessibilityService {

  private readonly WCAG_URL =
    'https://raw.githubusercontent.com/IF-DeividSilva/acervo-ecomuseu/main/Metadados/metadados_WCAG.json';

  constructor(private acervoService: AcervoService) {}

  /**
   * Busca os critérios WCAG do conteúdo e resolve os nomes a partir do metadados_WCAG.json
   * @param idConteudo - ID do conteúdo
   * @returns Observable com array de WCAGResolucao (id + categoria + subcategoria)
   */
  obterCriterios(idConteudo: number): Observable<WCAGResolucao[]> {
    return forkJoin({
      conteudo: this.acervoService.getConteudo(idConteudo),
      wcagMetadados: this.acervoService.getWcagMetadados()
    }).pipe(
      map(({ conteudo, wcagMetadados }) => {

        // pega os ids do conteudo ex: [{ WCAG_id: 18 }, { WCAG_id: 24 }]
        const ids: number[] = (conteudo?.WCAG ?? []).map((w: any) => w.WCAG_id);

        // associa cada id com sua categoria e subcategoria do metadados_WCAG.json
        return ids.map(id => {
          const encontrado = wcagMetadados.find((w: WCAGMetadado) => w.WCAG_id_pk === id);
          return {
            id,
            categoria: encontrado?.WCAG_categoria ?? 'Desconhecido',
            subcategoria: encontrado?.WCAG_id_subcategoria ?? 'Desconhecido'
          };
        });
      }),
      catchError((erro) => {
        console.error('Erro ao obter critérios WCAG:', erro);
        return of([]);
      })
    );
  }
}