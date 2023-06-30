from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

suinocultura = APIRouter(prefix="/suinocultura", tags=["bovinocultura"])
collection = db.suinocultura

class Code(str, Enum):
    abates = "284"
    peso = "285"
    populacao = "2209"

@suinocultura.get("/{code}")
async def dados_suinos(code : Code) -> IbgeData:
    """
    **Code**
    -   284 : Abate
    -   285 : Peso
    -   2209 : População
    """
    search = {"id" : code.value}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data
