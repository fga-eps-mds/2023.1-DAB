import { Component } from '@angular/core';
import { Card } from 'src/app/interfaces/Card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
    id: 'avicultura',
    imagemUrl: './assets/galinha.png',
    nome: 'Avicultura',
    desc1: 'Dados referentes à',
    desc2: 'avicultura do último',
    desc3 : 'trimestre'
  }]

  constructor(private router:ActivatedRoute){
    
  }
}
