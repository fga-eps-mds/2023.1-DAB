import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

// Service que contém a rota padrão da API, todos os outros services vão herdar dele

@Injectable({
  providedIn: 'root'
})
export class HttpBaseService {

  private apiBase: string = 'http://localhost:8000/';     // rota base da API
  private readonly httpClient!: HttpClient;

  constructor(protected readonly injector: Injector) { 

    if (injector == null || injector == undefined) {
      throw new Error('Injector não pode ser nulo!');
    }

    this.httpClient = injector.get(HttpClient);     // dessa forma, temos uma injeção de dependências invertida

  }

  protected httpGet(endpoint: string): Observable<any> {      // método que vai ser herdado pelas classes filhas..
    return this.httpClient.get(`${this.apiBase}${endpoint}`);
  }

}