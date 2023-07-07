from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_one
from script.models import ChartData

avicultura = APIRouter(prefix="/avinocultura")
COLLECTION = "AVICULTURA"

class Code(str, Enum):
    POEDEIRAS = "1988"
    OVOS_PRODUZIDOS = "29"
    PRODUCAO_CONSUMO = "9588"
    PRODUCAO_INCUBACAO = "9589"
    POPULACAO = "2209"

@avicultura.get("/{code}", tags=["avicultura"])
async def dados_avicultura(code : Code) -> ChartData:
    """
    **Code**
    -   1988    : Número de cabeças de galinhas poeiras
    -   29      : Quantidade de ovos produzidos
    -   9588    : Quantidade de ovos produzidos para consumo
    -   9589    : Quantidade de ovos produzidos para incubação
    -   2209    : Número de cabeças
    """
    search = {"id" : code.value}
    response = await fetch_one(COLLECTION, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : ChartData = ChartData(**response)
    return ibge_data
