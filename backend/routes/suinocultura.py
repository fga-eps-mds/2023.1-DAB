from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_one
from script.models import ChartData

suinocultura = APIRouter(prefix="/suinocultura", tags=["bovinocultura"])
collection = "SUINOCULTURA"

class Code(str, Enum):
    abates = "284"
    peso = "285"
    populacao = "2209"

@suinocultura.get("/{code}")
async def dados_suinos(code : Code) -> ChartData:
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
