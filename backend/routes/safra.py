from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_list
from script.models import ChartData

safra = APIRouter(prefix="/safra")
collection = "SAFRA"

class Code(str, Enum):
    area_plantada = "109"
    area_colhida = "216"
    producao = "214"
    rendimento = "112"

@safra.get("/{code}/{locale}")
async def dados_safra(code : Code, locale: str):
    """
    **Code:**
    -   109 : Area plantada
    -   216 : Area colhida
    -   214 : Produção
    -   112 : Rendimento
    """
    search = {"id": code.value, "locale" : locale}
    response = await fetch_list(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    chart_list = []
    for chart in response:
       chartData = ChartData(**chart) 
       chart_list.append(chartData)

    return chart_list

