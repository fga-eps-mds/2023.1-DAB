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

	max!:string;

	ngOnInit(): void {
		Chart.register(...registerables);
		this.createChart("bar")
		this.max= this.getMax(this.chart.dataList);
		console.log(this.max)
	}
	media(): number{
		let avg = 0
	  	for (let i = 0; i < this.chart.dataList.length; i++) {
			let a = this.chart.dataList[i]/this.chart.dataList.length
        	avg += Math.trunc(a)
    	}        
		return avg
	}
	getMax(array: any[]): string{
		const max = Math.max(...array);
		const index = array.indexOf(max.toString());
		return this.chart.labels[index];

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
						size: 35,

					},
					padding: {
						top: 80, // adiciona 20px de margem superior
						bottom: 80// adiciona 20px de margem inferior
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
