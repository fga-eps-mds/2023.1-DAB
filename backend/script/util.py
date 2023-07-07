from .models import IbgeData, ChartData

def toChartData(ibge_list: list[IbgeData], categoria = None) -> list[dict]:
    chart_list: list[dict] = []
    for ibgeData in ibge_list:
        id = ibgeData.id
        title = ibgeData.variavel
        for resultado in ibgeData.resultados:
            for serie in resultado.series:
                locale = serie.localidade.id
                serie_d = serie.serie
                data_list: list[str] = [item for item in serie_d.values()]

                labels: list[str] = [item for item in serie_d.keys()]

                chartData = ChartData(id=id,categoria=categoria,locale=locale, type="bar", title=title, labels=labels, dataList=data_list)
                chart_list.append(chartData.dict())

    return chart_list
    
