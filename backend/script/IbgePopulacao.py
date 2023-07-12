from .IbgeRequest import IbgeRequest
from .models import IbgeData, ChartData
from config.db import insert_one

class IbgePopulacao:
    END = "960/periodos/-6/variaveis/2209?localidades=N3[all]&classificacao=12443"

    CODES = {
        "bovinos": "[110056]",
        "suinos": "[110063]",
        "aves": "[111191]"
    }

    def to_chart_data(self, ibge_list: list[IbgeData], categoria: str) -> dict:

        labels: list[str] = []
        data: list[str] = []
        title: str = ""

        for ibge in ibge_list:
            title = ibge.variavel
            for resultado in ibge.resultados:
                for serie in resultado.series:
                    labels.append(serie.localidade.nome)
                    for key in serie.serie:
                        data.append(serie.serie[key])

        chart_data = ChartData(id="2209", categoria=categoria, type="bar",locale=None, title=title, labels=labels, dataList=data)
        return chart_data.dict()

    def insert(self):
        ibgeRequest = IbgeRequest()
        for code in self.CODES:
            query = self.END+self.CODES[code]
            print(query)
            request = ibgeRequest.request(query)
            chart = self.to_chart_data(request, code)
            insert_one("POPULACAO", chart)
