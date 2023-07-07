import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import { ChartData } from 'src/app/interfaces/ChartData';

@Component({
	selector: 'app-bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.scss']
})

export class BarChartComponent implements OnInit {
	@ViewChild("barchart", { static: true }) element!: ElementRef;

	@Input() chart!: ChartData;


	ngOnInit(): void {
		Chart.register(...registerables);
		//console.log(this.chart)
		this.createChart(this.chart)
	}


	createChart(chartData: ChartData): void {

		new Chart(this.element.nativeElement, {
			type: "bar",
			data: {
				labels: chartData.labels,

				datasets: [
					{
						data: chartData.dataList,
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
					text: chartData.title
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
