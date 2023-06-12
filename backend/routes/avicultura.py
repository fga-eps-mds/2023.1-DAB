from fastapi import APIRouter, HTTPException
from config.db import db, fetch_data
from script.models import IbgeData

avicultura = APIRouter()
collection = db.avicultura

@avicultura.get("/producao")
async def quatidade_ovos_produzidos() -> IbgeData:
    search = {"id" : "1988"}
    response = await fetch_data(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data

@avicultura.get("/cabecas")
async def numero_cabecas() -> IbgeData:
    search = {"id" : "29"}
    response = collection.find_one(search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : IbgeData = IbgeData(**response)
    return ibge_data