from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

suinocultura = APIRouter()
collection = db.suinocultura

@suinocultura.get("/abatidos")
async def suinos_abatidos() -> IbgeData:
    search = {"id" : "284"}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data

@suinocultura.get("/peso")
async def peso_carcaca_suinos() -> IbgeData:
    search = {"id" : "285"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data
