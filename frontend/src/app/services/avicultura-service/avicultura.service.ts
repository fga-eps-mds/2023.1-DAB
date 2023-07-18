import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';
import { ChartData } from 'src/app/interfaces/ChartData';

@Injectable({
  providedIn: 'root'
})
export class AvinoculturaService extends HttpBaseService {

  private endpointCabecasGalinhasPoeiras = 'avicultura/1988';
  private endpointOvosProduzidos = 'avicultura/29';
  private endpointOvosProduzidosConsumo = 'avicultura/9588';
  private endpointOvosProduzidosIncubacao = 'avicultura/9589';
  private endpointCabecas = 'populacao/aves';

  constructor(protected override readonly injector: Injector) {
    super(injector);
  }

  // criar uma interface para esse retorno..
  listGalinhasPoeiras(): Observable<ChartData> {
    return this.httpGet(this.endpointCabecasGalinhasPoeiras);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidos(): Observable<ChartData> {
    return this.httpGet(this.endpointOvosProduzidos);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidosConsumo(): Observable<ChartData> {
    return this.httpGet(this.endpointOvosProduzidosConsumo);
  }

  // criar uma interface para esse retorno..
  listOvosProduzidosIncubacao(): Observable<ChartData> {
    return this.httpGet(this.endpointOvosProduzidosIncubacao);
  }

  // criar uma interface para esse retorno..
  listCabecas(): Observable<ChartData> {
    return this.httpGet(this.endpointCabecas);
  }

}
