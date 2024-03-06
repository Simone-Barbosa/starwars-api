// starwars.component.ts

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service'; // trocar para enviar pra prof

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrl: './starwars.component.scss',
})
export class StarwarsComponent implements OnInit {
  constructor(private starwarsService: StarwarsService) {}

  respostaPessoas: any | null = null;
  respostaPlanetas: any | null = null;
  respostaFilmes: any | null = null;
  estaCarregando: boolean = false;

  ngOnInit(): void {
    this.recuperarPessoas(null);
  }

  recuperarPessoas(url: string | null) {
    this.estaCarregando = true;
    this.starwarsService.recuperarPessoas(url).subscribe(
      (resposta) => {
        this.respostaPessoas = resposta;
        this.estaCarregando = false;
      },
      (erro) => {
        this.estaCarregando = false;
        alert(erro);
      }
    );
  }

  recuperarFilmes(urls: string[] | null) {
    this.respostaFilmes = [];
    if (urls) {
      urls.forEach((url) => {
        this.starwarsService.recuperarFilmes(url).subscribe(
          (resposta) => {
            this.respostaFilmes.push(resposta);
          },
          (erro) => {
            alert(erro);
          }
        );
      });
    }
  }

  recuperarPlanetas(url: string | null) {
    this.estaCarregando = true;
    this.starwarsService.recuperarPlanetas(url).subscribe(
      (resposta) => {
        this.respostaPlanetas = resposta;
        this.estaCarregando = false;
      },
      (erro) => {
        this.estaCarregando = false;
        alert(erro);
      }
    );
  }
}
