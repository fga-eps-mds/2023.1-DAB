import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SafraService extends HttpBaseService {

  private endpointPlantada: string = 'safra/109';    // área plantada
  private endpointColhida: string = 'safra/216';    // área colhida
  private endpointProducao: string = 'safra/214';    // quantidade produzida
  private endpointRendimento: string = 'safra/112';    // rendimento médio

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  // criar uma interface para esse retorno..
  listAreaPlantada(): Observable<any> {
    return this.httpGet(this.endpointPlantada);
  }

  // criar uma interface para esse retorno..
  listAreaColhida(): Observable<any> {
    return this.httpGet(this.endpointColhida);
  }

  // criar uma interface para esse retorno..
  listQuantidadeProduzida(): Observable<any> {
    return this.httpGet(this.endpointProducao);
  }

  // criar uma interface para esse retorno..
  listRendimentoMedio(): Observable<any> {
    return this.httpGet(this.endpointRendimento);
  }

}