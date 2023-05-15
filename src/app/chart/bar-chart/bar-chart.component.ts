import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IbgeApiService } from 'src/app/service/ibge-api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	@ViewChild("barchart", { static: true}) element!: ElementRef;

	private title: string = "População Bovina";
	private labels: string[] = [];
	private data: number[] = [];
  private chart!: Chart;

	ngOnInit(): void {
    Chart.register(...registerables);
    this.loadChart();
	}

	constructor(private ibgeApi: IbgeApiService) {
    this.getDados();
	}
	getDados(): void {
		this.ibgeApi.getDados().subscribe((res) => {
			res.forEach(data => {
				data.resultados.forEach(resultado => {
					resultado.series.forEach(serie => {
						this.data.push(parseInt(serie.serie[2006]))
						this.labels.push(serie.localidade.nome)
					})
				})
        this.chart.data.datasets[0].data = this.data;
        this.chart.data.labels = this.labels;
        this.chart.update()
			})
		})
	}

  loadChart(): void {
    console.log(this.data);
    console.log(this.labels);
    this.chart = new Chart(this.element.nativeElement, {
			type: 'bar',
			data: {
				labels: this.labels,
				datasets: [
					{
						data: this.data,
						backgroundColor: [
							"#f30",
							"#235",
							"#783"
						]
					}
				]
			},
			options: {
				scales: {
					x: {
						ticks: {
							color: 'black',
							font: {
								size: 20
							}
						}
					},
					y: {
						ticks: {
							color: 'black',
							font: {
								size: 20
							}
						}
					}
				},
				plugins: {
					title: {
						display: true,
						fullSize: true,
						color: "black",
						font: {
							size: 60
						},
						text: this.title
					},
					legend: {
						display: false
					}
				},
				responsive: true,
				maintainAspectRatio: true

			}
		})

  }
}
