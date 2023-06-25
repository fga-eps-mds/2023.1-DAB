export interface IbgeData {
	variavel: string;
	unidade: string;
	resultados: [{
		series: [{
			localidade: {
				nome: string;
			};
			serie: Object[]
		}]
	}]
}
