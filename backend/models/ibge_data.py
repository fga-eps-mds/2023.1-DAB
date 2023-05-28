from typing import Dict, List
from pydantic import BaseModel

class Series(BaseModel):
    localidade: str
    serie: Dict[str,int]

class IbgeData(BaseModel):
    variavel: str
    unidade: str
    resultados: List[Series]
