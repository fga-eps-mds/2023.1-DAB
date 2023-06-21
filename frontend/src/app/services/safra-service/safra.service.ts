import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SafraService extends HttpBaseService {

  private endpointPlantada: string = 'safra/plantada';    // área plantada
  private endpointColhida: string = 'safra/colhida';    // área colhida
  private endpointProducao: string = 'safra/producao';    // quantidade produzida
  private endpointRendimento: string = 'safra/rendimento';    // rendimento médio

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