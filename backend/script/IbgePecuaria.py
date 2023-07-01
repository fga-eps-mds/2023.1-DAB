from config.db import insert_data
from .urls import IbgeRequest
from .util import toChartData

class IbgePecuaria:

    QUERIES = {
        "AVICULTURA":"915/periodos/-20/variaveis/1988|29|9588|9589?localidades=N1[all]&classificacao=12716[115236]",
        "SUINOCULTURA":"1093/periodos/-20/variaveis/284|285?localidades=N1[all]&classificacao=12716[115236]",
        "BOVINOCULTURA":"1092/periodos/-6/variaveis/284|285?localidades=N1[all]&classificacao=18[992]"
    }

    def insert(self):
        ibgeRequest = IbgeRequest()
        for query in self.QUERIES:
            request = ibgeRequest.request(self.QUERIES[query])
            chart = toChartData(request)
            insert_data(query, chart)
        
