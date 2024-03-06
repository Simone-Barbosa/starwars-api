import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {
  @Input()
  filmes:any|null = null;

  fechar(){
    this.filmes = null;
  }
}
