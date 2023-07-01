import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class AvinoculturaService extends HttpBaseService {

  private endpointCabecasGalinhasPoeiras: string = 'avinocultura/1988';
  private endpointOvosProduzidos: string = 'avinocultura/29';
  private endpointOvosProduzidosConsumo: string = 'avinocultura/9588';
  private endpointOvosProduzidosIncubacao: string = 'avinocultura/9589';
  private endpointCabecas: string = 'avinocultura/2209';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  // criar uma interface para esse retorno..
  listGalinhasPoeiras(): Observable<any> {
    return this.httpGet(this.endpointCabecasGalinhasPoeiras);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidos(): Observable<any> {
    return this.httpGet(this.endpointOvosProduzidos);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidosConsumo(): Observable<any> {
    return this.httpGet(this.endpointOvosProduzidosConsumo);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidosIncubacao(): Observable<any> {
    return this.httpGet(this.endpointOvosProduzidosIncubacao);
  }

  // criar uma interface para esse retorno..
  listCabecas(): Observable<any> {
    return this.httpGet(this.endpointCabecas);
  }

}