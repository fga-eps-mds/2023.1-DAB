import { Component, Input } from '@angular/core';
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
  
  @Input() content!: Card;
  @Input() title!:string;
  constructor(private router: ActivatedRoute) {}

	ngOnInit() {
		
	}

	dados: String = "";

  

}
