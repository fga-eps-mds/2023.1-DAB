import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SafraService extends HttpBaseService {

  private endpointPlantada = 'safra/109';    // área plantada
  private endpointColhida = 'safra/216';    // área colhida
  private endpointProducao  = 'safra/214';    // quantidade produzida
  private endpointRendimento = 'safra/112';    // rendimento médio

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  // criar uma interface para esse retorno..
  listAreaPlantada(idLocale: number): Observable<any> {
    return this.httpGet(`${this.endpointPlantada}/${idLocale}`);
  }

  // criar uma interface para esse retorno..
  listAreaColhida(idLocale: number): Observable<any> {
    return this.httpGet(`${this.endpointColhida}/${idLocale}`);
  }

  // criar uma interface para esse retorno..
  listQuantidadeProduzida(idLocale: number): Observable<any> {
    return this.httpGet(`${this.endpointProducao}/${idLocale}`);
  }

  // criar uma interface para esse retorno..
  listRendimentoMedio(idLocale: number): Observable<any> {
    return this.httpGet(`${this.endpointRendimento}/${idLocale}`);
  }

}
