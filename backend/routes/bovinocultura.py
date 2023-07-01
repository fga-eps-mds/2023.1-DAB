from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_one
from script.models import ChartData

bovinocultura = APIRouter(prefix="/bovinocultura")
collection = "BOVINOCULTURA"

class Code(str, Enum):
    abatidos = "284"
    peso = "285"
    cabecas = "2209"

@bovinocultura.get("/{code}")
async def dados_bovinocultura(code: Code) -> ChartData:
    """
    **Code**
    -   284 : Abate
    -   285 : Peso
    -   2209 : População
    """
    search = {"id" : code.value}
    response = await fetch_one(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : ChartData = ChartData(**response)
    return ibge_data
