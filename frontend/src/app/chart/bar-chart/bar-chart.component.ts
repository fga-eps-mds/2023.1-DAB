import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';

import { ChartData } from 'src/app/interfaces/ChartData';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
	@ViewChild("barchart", { static: true }) element!: ElementRef;

	@Input() chart!: ChartData;

	private object!: Chart;

	ngOnInit(): void {
		Chart.register(...registerables);
		this.createChart("bar")
	}

	changeChart(type: ChartType){
		this.object.destroy()
		this.createChart(type)
	}

	createChart(type: ChartType): void {
		this.object = new Chart(this.element.nativeElement, {
			type: type,
			data: {
				labels: this.chart.labels,

				datasets: [
					{
						data: this.chart.dataList,
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
					text: this.chart.title
				},
				legend: {
					display: false
				}
			},
			responsive: true,
		}
		})

	}
}
