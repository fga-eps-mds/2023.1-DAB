from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

avinocultura = APIRouter(prefix="/avinocultura")
collection = db.avicultura

class Code(str, Enum):
    poedeiras = "1988"
    ovos_produzidos = "29"
    producao_consumo = "9588"
    producao_incubacao = "9589"
    populacao = "2209"

@avinocultura.get("/{code}", tags=["avicultura"])
async def dados_avicultura(code : Code) -> IbgeData:
    """
    **Code**
    -   1988    : Número de cabeças de galinhas poeiras
    -   29      : Quantidade de ovos produzidos
    -   9588    : Quantidade de ovos produzidos para consumo
    -   9589    : Quantidade de ovos produzidos para incubação
    -   2209    : Número de cabeças
    """
    search = {"id" : code.value}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data