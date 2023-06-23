from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

bovinocultura = APIRouter(prefix="/bovinocultura")
collection = db.bovinocultura

class Code(str, Enum):
    abatidos = "284"
    peso = "285"
    cabecas = "2209"

@bovinocultura.get("/{code}")
async def dados_bovinocultura(code: Code) -> IbgeData:
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
