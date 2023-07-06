from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_list
from script.models import ChartData

safra = APIRouter(prefix="/safra")
COLLECTION = "SAFRA"

class Code(str, Enum):
    AREA_PLANTADA = "109"
    AREA_COLHIDA = "216"
    PRODUCAO = "214"
    RENDIMENTO = "112"

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
    response = await fetch_list(COLLECTION, search)
    if response is None:
        raise HTTPException(status_code=404)
    chart_list = []
    for chart in response:
       chart_data = ChartData(**chart)
       chart_list.append(chart_data)

    return chart_list
