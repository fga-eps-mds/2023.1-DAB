import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  carouselItems = [
    {
      image: '../../../assets/safra.jpg',
      title: 'SAFRAS',
      description: 'Dados referentes a safras no último trimestre',
      hovered: false,
      link: '#'
    },
    {
      image: '../../../assets/pecuaria.jpg',
      title: 'PECUÁRIA',
      description: 'Dados referentes a pecuária no último trimestre',
      hovered: false,
      link: 'pecuaria'
    },
    {
      image: '../../../assets/agronegocio.jpeg',
      title: 'COMÉRCIO',
      description: 'Dados referentes a comércio no último trimestre',
      hovered: false,
      link: '#'
    }
  ];
}
