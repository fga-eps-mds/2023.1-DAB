import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpBaseService } from 'src/app/shared/http-base-service/http-base.service';
import { ChartData } from 'src/app/interfaces/ChartData';

@Injectable({
  providedIn: 'root'
})
export class SafraService extends HttpBaseService {

  constructor(protected override readonly injector: Injector) { 
    super(injector);
  }

  request(type:string, idLocale:string): Observable<ChartData[]>{
      return this.httpGet(`safra/${type}/${idLocale}`);
  }


}
