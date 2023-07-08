from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_one
from script.models import ChartData

avicultura = APIRouter(prefix="/avinocultura", tags=["Avicultura"])
COLLECTION = "AVICULTURA"

class Code(str, Enum):
    OVOS_PRODUZIDOS = "29"
    POEDEIRAS = "1988"
    POPULACAO = "2209"
    PRODUCAO_CONSUMO = "9588"
    PRODUCAO_INCUBACAO = "9589"

@avicultura.get("/{code}")
async def dados_avicultura(code : Code) -> ChartData:
    """
    **Params**
    - **code**
      -   29: Quantidade de ovos produzidos
      -   1988: Número de cabeças de galinhas poeiras
      -   2209: Número de cabeças
      -   9588: Quantidade de ovos produzidos para consumo
      -   9589: Quantidade de ovos produzidos para incubação
    """
    search = {"id" : code.value}
    response = await fetch_one(COLLECTION, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : ChartData = ChartData(**response)
    return ibge_data
