import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';
import { ChartData } from 'src/app/interfaces/ChartData';


@Injectable({
  providedIn: 'root'
})
export class BovinoCulturaService extends HttpBaseService {

  private endpointAbatidos = 'bovinocultura/284';
  private endpointPeso = 'bovinocultura/285';
  private endpointPopulacao = 'bovinocultura/2209';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  // criar uma interface para esse retorno..
  listAbatidos(): Observable<ChartData> {
    return this.httpGet(this.endpointAbatidos);
  }

  // criar uma interface para esse retorno..
  listPeso(): Observable<ChartData> {
    return this.httpGet(this.endpointPeso);
  }

  //// criar uma interface para esse retorno..
  listCabecas(): Observable<ChartData> {
   return this.httpGet(this.endpointPopulacao);
  }

}
