import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class AvinoculturaService extends HttpBaseService{

  private endpointProducao: string = 'avinocultura/producao';
  private endpointCabecas: string = 'avinocultura/cabecas';

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  listProducao(): Observable<any> {
    return this.httpGet(this.endpointProducao);
  }

}