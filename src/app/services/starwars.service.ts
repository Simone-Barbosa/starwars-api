// starwars.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  constructor(private http: HttpClient) {}

  private url = 'https://swapi.dev/api';

  private urlPessoas = '/people';
  private urlFilmes = '/films';
  private urlPlanetas = '/planets/';

  public recuperarPessoas(urlCompleta: string | null): Observable<any> {
    if (urlCompleta) {
      return this.http.get<any>(urlCompleta);
    } else {
      return this.http.get<any>(this.url + this.urlPessoas);
    }
  }

  public recuperarPlanetas(urlCompleta: string | null): Observable<any> {
    if (urlCompleta) {
      return this.http.get<any>(urlCompleta);
    } else {
      return this.http.get<any>(this.url + this.urlPlanetas);
    }
  }

  public recuperarFilmes(urlCompleta: string | null): Observable<any> {
    if (urlCompleta) {
      return this.http.get<any>(urlCompleta);
    } else {
      return this.http.get<any>(this.url + this.urlFilmes); //ver, sem url
    }
  }
}
