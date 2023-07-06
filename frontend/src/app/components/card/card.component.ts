import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Card {
  id: string;
  imagemUrl: string;
  nome: string;
  // a descrição foi quebrada em três linhas nos cards.. por isso os três campos para descrição
  desc1: string;
  desc2: string;
  desc3: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent{

  constructor(private router: ActivatedRoute) {}

	ngOnInit() {
		
	}

	dados: String = "";

  // os dados de cada card estão armazenados nesse array:
  cards: Card[] = [{
    id: 'suinocultura',
    imagemUrl: './assets/porco.png',
    nome: 'Suinocultura',
    desc1: 'Dados referentes à',
    desc2: 'suinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: 'bovinocultura',
    imagemUrl: './assets/vaquinha.png',
    nome: 'Bovinocultura',
    desc1: 'Dados referentes à',
    desc2: 'bovinocultura do último',
    desc3 : 'trimestre'
  }, 
  {
    id: 'avinocultura',
    imagemUrl: './assets/galinha.png',
    nome: 'Avinocultura',
    desc1: 'Dados referentes à',
    desc2: 'avicultura do último',
    desc3 : 'trimestre'
  }]
}
