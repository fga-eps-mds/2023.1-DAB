import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
	@ViewChild("barchart", { static: true}) element!: ElementRef;

	ngOnInit(): void {
		new Chart(this.element.nativeElement, {
			type: 'bar',
			data: {
				labels: ["Place", "Holder", "Holder"],
				datasets: [
					{
						data: [300, 123, 231],
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
						text: "Place Holder"	
					},
					legend: {
						display: false
					}
				},
				responsive: true
			}
		})
	}	
}
