from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_list
from script.models import ChartData

safra = APIRouter(prefix="/safra", tags=["Safra"])
COLLECTION = "SAFRA"

class Code(str, Enum):
    ARROZ = "arroz"
    MILHO = "milho"
    FEIJAO = "feijao"
    SOJA = "soja"

@safra.get("/{code}/{locale}")
async def dados_safra(code : Code, locale: str):

    """
    **Params**
    - **code**: tipo de cultura
    - **locale**: Código de estado do IBGE
    """
   
    search = {"categoria": code.value, "locale" : locale}
    response = await fetch_list(COLLECTION, search)
    if response is None:
        raise HTTPException(status_code=404)
    chart_list = []
    for chart in response:
       chart_data = ChartData(**chart)
       chart_list.append(chart_data)

    return chart_list
