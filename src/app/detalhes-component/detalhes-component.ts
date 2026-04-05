import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AcervoService } from '../acervo-component/acervo.service';

@Component({
  selector: 'app-detalhes-component',
  imports: [RouterLink],
  templateUrl: './detalhes-component.html',
  styleUrl: './detalhes-component.css'
})
export class DetalhesComponent implements OnInit{
  constructor(private route: ActivatedRoute, private acervoService: AcervoService){}
  
  itemId: number | null = null;
  conteudoDetalhado: any;
  
  ngOnInit(): void {
    // ler o parametro id
    this.itemId = Number(this.route.snapshot.paramMap.get('id'));
    
    // chama a funçao do service para pegar os conteudos
    this.acervoService.getConteudo(this.itemId).subscribe(dados => {
      this.conteudoDetalhado = dados;
    })
  }

  reproduzindo = false;

  toggleReproducao() {
    this.reproduzindo = !this.reproduzindo;
  }
}
