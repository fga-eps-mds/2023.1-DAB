import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IbgeData } from 'src/app/interfaces/IbgeData';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BovinoCulturaService {

  private endpointAbatidos = 'bovinocultura/284';
  private endpointPeso = 'bovinocultura/285';
  private endpointPopulacao = 'bovinocultura/2209';

  constructor(private http: HttpClient) {
  }

  // criar uma interface para esse retorno..
  listAbatidos(): Observable<IbgeData[]> {
    return this.http.get<IbgeData[]>(this.endpointAbatidos);
  }

  // criar uma interface para esse retorno..
  //listPeso(): Observable<IbgeData> {
  //  return this.httpGet(this.endpointPeso);
  //}

  //// criar uma interface para esse retorno..
  //listCabecas(): Observable<IbgeData> {
  //  return this.httpGet(this.endpointPopulacao);
  //}

}
