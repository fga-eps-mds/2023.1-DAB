from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

safra = APIRouter(prefix="/safra")
collection = db.safra

@safra.get("/plantada")
async def area_plantada() -> IbgeData:
    search = {"id" : "109"}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data

@safra.get("/colhida")
async def area_colhida() -> IbgeData:
    search = {"id" : "216"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data


@safra.get("/producao")
async def quantidade_produzida() -> IbgeData:
    search = {"id" : "214"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data


@safra.get("/rendimento")
async def rendimento_medio() -> IbgeData:
    search = {"id" : "112"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data
