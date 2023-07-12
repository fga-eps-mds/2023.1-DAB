import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dataItems: number[] = [0, 0, 0, 0];
  messageToCopy = "dab2023.br@gmail.com";
  isCopied = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.updateDataItems();
  }

  updateDataItems() {
    const finalValues = [142, 293, 36, 47]; // Valores finais desejados

    finalValues.forEach((value, index) => {
      
      const duration = 6000; // Duração da animação 
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

  copyToClipboard() {
    const element = this.renderer.createElement('textarea');
    this.renderer.setProperty(element, 'value', this.messageToCopy);
    this.renderer.appendChild(document.body, element);
    element.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, element);
  
    this.isCopied = true;
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.copyToClipboard();
    }
  }
}
