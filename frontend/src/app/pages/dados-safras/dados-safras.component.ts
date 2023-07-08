import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SafraService } from 'src/app/services/safra-service/safra.service';
import { ChartData } from 'src/app/interfaces/ChartData';
import { Card } from 'src/app/interfaces/Card';

@Component({
  selector: 'app-dados-safras',
  templateUrl: './dados-safras.component.html',
  styleUrls: ['./dados-safras.component.scss']
})
export class DadosSafrasComponent {

  cards: Card[] = [{
    id: 'arroz',
    imagemUrl: './assets/porco.png',
    nome: 'Arroz',
    desc1: 'Dados referentes à',
    desc2: 'a safra anual',
    desc3 : 'arroz'
  }, 
  {
    id: 'feijao',
    imagemUrl: './assets/vaquinha.png',
    nome: 'Feijao',
    desc1: 'Dados referentes à',
    desc2: 'a safra anual',
    desc3 : 'de feijao'
  }, 
  {
    id: 'milho',
    imagemUrl: './assets/galinha.png',
    nome: 'Milho',
    desc1: 'Dados referentes à',
    desc2: 'a safra anual',
    desc3 : 'de milho'
  },
  {
    id: 'soja',
    imagemUrl: './assets/galinha.png',
    nome: 'Soja',
    desc1: 'Dados referentes à',
    desc2: 'a safra anual ',
    desc3 : 'de soja'
  }

]

  charts: Array<ChartData> = [];
	load = false;

  constructor(
    private route:ActivatedRoute,
    private safraService:SafraService,

  )
  { }

  getSafra(type:string){
    const routerParams = this.route.snapshot.paramMap;
		const EstadoID = routerParams.get("EstadoID") ?? "";
    this.safraService.request(type, EstadoID).subscribe((res)=>{
      this.charts = res;
      this.load = true;
      
    });
  }
}
