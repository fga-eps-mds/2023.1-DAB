from enum import Enum
from script.models import ChartData
from fastapi import APIRouter, HTTPException
from config.db import fetch_one

populacao = APIRouter(prefix="/populacao")
COLLECTION = "POPULACAO"

class Code(str, Enum):
    BOVINO = "bovinos"
    SUINO = "suinos"
    AVES = "aves"

@populacao.get("/{code}", tags=["populacao"])
async def dados_populacao(code: Code) -> ChartData:
    search = {"categoria" : code.value}
    response = await fetch_one(COLLECTION, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data = ChartData(**response)
    return ibge_data
