import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IbgeApiService } from 'src/app/service/ibge-api.service';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	@ViewChild("barchart", { static: true}) element!: ElementRef;

	title: string = "População Bovina";
	labels: string[] = [];
	data: number[] = [];

	constructor(private ibgeApi: IbgeApiService) {
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
			})
		})
	}

	ngOnInit(): void {
		this.getDados()
		new Chart(this.element.nativeElement, {
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
