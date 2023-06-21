from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

bovinocultura = APIRouter(prefix="/bovinocultura")
collection = db.bovinocultura

@bovinocultura.get("/abatidos")
async def bovinos_abatidos() -> IbgeData:
    search = {"id" : "284"}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data

@bovinocultura.get("/peso")
async def peso_carcaca_bovinos() -> IbgeData:
    search = {"id" : "285"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data
