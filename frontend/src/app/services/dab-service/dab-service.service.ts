import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IbgeData } from 'src/app/interfaces/IbgeData';

enum DataId {
	SUINO  = "suinocultura",
	BOVINO = "bovinocultura",
	AVINO = "avinocultura",
	SAFRA = "safra"
}

@Injectable({
  providedIn: 'root'
})
export class DabServiceService {

  constructor(private http: HttpClient) { }

	private host = "http://localhost:8000/";

	private avinoCultura: string[] = ["1998", "29", "9588", "9589", "2209"];
	private bovinoCultura: string[] = ["284", "285", "2209"]
	private suinoCultura: string[] = ["284", "285", "2209"]
	private safra: string[] = ["109", "216", "214", "112"];

	request(dataId: string): Observable<IbgeData>[] {
		let url = this.host+dataId;
		let codes: string[] = [];
		let dataList: Observable<IbgeData>[] = [];

		switch(dataId){
			case DataId.BOVINO:
				codes = this.bovinoCultura;
			break;
			case DataId.SUINO:
				codes = this.suinoCultura;
			break;
			case DataId.AVINO:
				codes = this.avinoCultura;
			break;
			case DataId.SAFRA:
				codes= this.safra;
			break;
		}
		codes.forEach(code => {
			let res = this.http.get<IbgeData>(url+'/'+code)
			dataList.push(res)
		})	
		return dataList;
	}
}
