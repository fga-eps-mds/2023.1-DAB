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
    desc2: 'suinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: 'feijao',
    imagemUrl: './assets/vaquinha.png',
    nome: 'Feijao',
    desc1: 'Dados referentes à',
    desc2: 'bovinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: 'milho',
    imagemUrl: './assets/galinha.png',
    nome: 'Milho',
    desc1: 'Dados referentes à',
    desc2: 'avicultura do último',
    desc3 : 'trimestre'
  },
  {
    id: 'soja',
    imagemUrl: './assets/galinha.png',
    nome: 'Soja',
    desc1: 'Dados referentes à',
    desc2: 'avicultura do último',
    desc3 : 'trimestre'
  }


]

  charts: Array<ChartData> = [];
	load: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private safraService:SafraService,

  )
  { }

  getSafra(type:string){
    const routerParams = this.route.snapshot.paramMap;
		const EstadoID = routerParams.get("EstadoID") ?? "";
    this.safraService.request(type, EstadoID).subscribe((res)=>{
      this.charts=res;
      this.load = true;
      
    });
  }

  ngOnInit() {
		//this.charts = this.loadData();
		
	}



}
