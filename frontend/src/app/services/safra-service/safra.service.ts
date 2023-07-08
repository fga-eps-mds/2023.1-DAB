import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class SafraService extends HttpBaseService {

  private endpointMilho = 'safra/milho';    // área plantada
  private endpointSoja = 'safra/soja';    // área colhida
  private endpointFeijao  = 'safra/feijao';    // quantidade produzida
  private endpointArroz = 'safra/arroz';    // rendimento médio

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  request(type:string, idLocale:string): Observable<any>{
      return this.httpGet(`safra/${type}/${idLocale}`);
  }


}
