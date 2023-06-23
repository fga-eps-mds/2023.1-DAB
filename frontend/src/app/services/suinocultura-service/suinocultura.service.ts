import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SuinoculturaService extends HttpBaseService {

  private endpointAbatidos: string = 'suinocultura/284';
  private endpointPeso: string = 'suinocultura/285';
  private endpointPopulacao: string = 'suinocultura/2209';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  // criar uma interface para esse retorno..
  listAbatidos(): Observable<any> {
    return this.httpGet(this.endpointAbatidos);
  }

  // criar uma interface para esse retorno..
  listPeso(): Observable<any> {
    return this.httpGet(this.endpointPeso);
  }

  // criar uma interface para esse retorno..
  listCabecas(): Observable<any> {
    return this.httpGet(this.endpointPopulacao);
  }

}