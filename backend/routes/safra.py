from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

safra = APIRouter(prefix="/safra")
collection = db.safra

class Code(str, Enum):
    area_plantada = "109"
    area_colhida = "216"
    producao = "214"
    rendimento = "112"

@safra.get("/{code}")
async def dados_safra(code : Code) -> IbgeData:
    """
    **Code:**
    -   109 : Area plantada
    -   216 : Area colhida
    -   214 : Produção
    -   112 : Rendimento
    """
    search = {"id" : code.value}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data

#@safra.get("/plantada")
#async def area_plantada() -> IbgeData:
#    search = {"id" : "109"}
#    response = await fetch_data(collection, search)
#    if response is None:
#        raise HTTPException(status_code=404)
#    ibge_data : IbgeData = IbgeData(**response)
#    return ibge_data
#
#@safra.get("/colhida")
#async def area_colhida() -> IbgeData:
#    search = {"id" : "216"}
#    response = collection.find_one(search)
#    if response is None:
#        raise HTTPException(status_code=404)
#    ibge_data : IbgeData = IbgeData(**response)
#    return ibge_data
#
#
#@safra.get("/producao")
#async def quantidade_produzida() -> IbgeData:
#    search = {"id" : "214"}
#    response = collection.find_one(search)
#    if response is None:
#        raise HTTPException(status_code=404)
#    ibge_data : IbgeData = IbgeData(**response)
#    return ibge_data
#
#
#@safra.get("/rendimento")
#async def rendimento_medio() -> IbgeData:
#    search = {"id" : "112"}
#    response = collection.find_one(search)
#    if response is None:
#        raise HTTPException(status_code=404)
#    ibge_data : IbgeData = IbgeData(**response)
#    return ibge_data
