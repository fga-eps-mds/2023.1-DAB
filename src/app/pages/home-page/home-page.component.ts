import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dataItems: number[] = [0, 0, 0, 0];

  ngOnInit() {
    this.updateDataItems();
  }

  updateDataItems() {
    const finalValues = [111, 233, 330, 220]; // Valores finais desejados

    finalValues.forEach((value, index) => {
      const startTime = 0; // Tempo inicial (em ms)
      const duration = 1000; // Duração da animação (em ms)
      const increment = value / duration; // Valor a ser incrementado a cada intervalo de tempo

      const interval = setInterval(() => {
        const currentValue = this.dataItems[index];
        const newValue = Math.ceil(currentValue + increment);

        if (newValue >= value) {
          this.dataItems[index] = value;
          clearInterval(interval);
        } else {
          this.dataItems[index] = newValue;
        }
      }, 1);
    });
  }
}
