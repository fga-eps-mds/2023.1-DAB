import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IbgeData } from '../interfaces/IbgeData';

@Injectable({
  providedIn: 'root'
})
export class IbgeApiService {

	private url = ' https://servicodados.ibge.gov.br/api/v3/agregados/960/periodos/-6/variaveis/2209?localidades=N3[all]&classificacao=12443[110056] '
  constructor(private http: HttpClient) { }

	getDados(): Observable<IbgeData[]> {
		return this.http.get<IbgeData[]>(this.url);
	}
}
