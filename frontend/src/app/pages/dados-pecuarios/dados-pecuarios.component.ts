import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DabServiceService } from 'src/app/services/dab-service/dab-service.service';
import { ChartData } from 'src/app/interfaces/ChartData';


@Component({
  selector: 'app-dados-pecuarios',
  templateUrl: './dados-pecuarios.component.html',
  styleUrls: ['./dados-pecuarios.component.scss']
})
export class DadosPecuariosComponent implements OnInit{

	charts: Array<ChartData> = [];
	load: boolean = false;

	// Injeção de dependências
	constructor(
		private route: ActivatedRoute, 
		private service: DabServiceService)
	{ }

	ngOnInit() {
		this.charts = this.loadData();
		console.log(this.charts);
		//this.load = true;		// após as requisições serem feitas, o load recebe true
	}

	loadData(): Array<ChartData> {
		const routerParams = this.route.snapshot.paramMap;
		const dataId = routerParams.get("dadosId") ?? "";

		let charts: Array<ChartData> = [];
		let data = this.service.request(dataId);
		data.forEach(obs => {
			obs.subscribe(obj => {
				console.log(obj)
			let chart: ChartData = {
				type: "",
				title: "",
				data: [],
				labels: []
			};
				chart.title = obj.variavel;
				obj.resultados[0].series.forEach(serie => {
					let array = Object.entries(serie.serie)
					array.forEach((value) => {
						chart.labels.push(value[0])
						let n = Number(value[1]) ?? null;
						if(n)
							chart.data.push(n);
					})
				})
				charts.push(chart);
			})
		})
		return charts;
	}

}
