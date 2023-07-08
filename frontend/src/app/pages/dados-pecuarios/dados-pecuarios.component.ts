import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartData } from 'src/app/interfaces/ChartData';
import { AvinoculturaService } from 'src/app/services/avinocultura-service/avinocultura.service';
import { BovinoCulturaService } from 'src/app/services/bovinocultura-service/bovinocultura.service';
import { SuinoculturaService } from 'src/app/services/suinocultura-service/suinocultura.service';

enum DataId {
	SUINO  = "suinocultura",
	BOVINO = "bovinocultura",
	AVINO = "avinocultura",
	SAFRA = "safra"
}

@Component({
  selector: 'app-dados-pecuarios',
  templateUrl: './dados-pecuarios.component.html',
  styleUrls: ['./dados-pecuarios.component.scss']
})
export class DadosPecuariosComponent implements OnInit{

	charts: Array<ChartData> = [];
	load = false;

	// Injeção de dependências
	constructor (
		private route: ActivatedRoute, 
		private bovinoculturaService: BovinoCulturaService,
		private suinoculturaService: SuinoculturaService,
		private aviculturaService: AvinoculturaService,
	)
	{ }

	ngOnInit() {
		this.charts = this.loadData();
		
		console.log(this.charts);
	}

	loadData(): Array<ChartData> {
		const routerParams = this.route.snapshot.paramMap;
		const dataId = routerParams.get("dadosId") ?? "";

		const charts: Array<ChartData> = [];
		
		switch(dataId) {
			case DataId.BOVINO:

				this.bovinoculturaService.listAbatidos().subscribe((abatidos) => {
					charts.push(abatidos);		// adiciona a requisição ao array que será retornado nessa função...
				});

				this.bovinoculturaService.listCabecas().subscribe((cabecas) => {
					charts.push(cabecas);
				})

				this.bovinoculturaService.listPeso().subscribe((peso) => {
					charts.push(peso);

					this.load = true;				// após as requisições serem feitas, o load recebe true
				});

			break;

			case DataId.SUINO:

				this.suinoculturaService.listAbatidos().subscribe((abatidos) => {
					charts.push(abatidos);
				});

				this.suinoculturaService.listCabecas().subscribe((cabecas) => {
					charts.push(cabecas);
				})

				this.suinoculturaService.listPeso().subscribe((peso) => {
					charts.push(peso);

					this.load = true;				// após as requisições serem feitas, o load recebe true
				});

			break;

			case DataId.AVINO:

				this.aviculturaService.listCabecas().subscribe((cabecas) => {
					charts.push(cabecas);
				});

				this.aviculturaService.listGalinhasPoeiras().subscribe((galinhas) => {
					charts.push(galinhas);
				});

				this.aviculturaService.listOvosProduzidos().subscribe((ovosProduzidos) => {
					charts.push(ovosProduzidos);
				});

				this.aviculturaService.listOvosProduzidosConsumo().subscribe((ovosProduzidosConsumo) => {
					charts.push(ovosProduzidosConsumo);
				});

				this.aviculturaService.listOvosProduzidosIncubacao().subscribe((ovosProduzidosIncubacao) => {
					charts.push(ovosProduzidosIncubacao);

					this.load = true;				// após as requisições serem feitas, o load recebe true
				});

			break;
		}

		return charts;

	}

}
