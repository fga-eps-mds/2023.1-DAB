from .urls import IbgeRequest
from .models import IbgeData
from .util import toChartData
from config.db import insert_data

class IbgeSafra:
    def __init__(self) -> None:
        pass

    END = "1612/periodos/-20/variaveis/109%7C216%7C214%7C215?localidades=N3[all]&classificacao=81"

    CODES = {
        "arroz": "[2692]",
        "feijao": "[2702]",
        "milho": "[2711]",
        "soja": "[2713]"
    }

    def __buildQuery(self, code: str) -> str:
        return self.END+code

    def insert(self):
        ibgeRequest = IbgeRequest()
        for code in self.CODES:
            query = self.__buildQuery(self.CODES[code])
            request = ibgeRequest.request(query)
            chart = toChartData(request, code)
            insert_data("SAFRA", chart)
             
