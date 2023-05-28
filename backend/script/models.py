from pydantic import BaseModel
from typing import Dict, List

class Localidade(BaseModel):
    id: str
    nome: str

class Series(BaseModel):
    localidade: Localidade 
    serie: Dict[str,str]

class Resultados(BaseModel):
    series: List[Series]

class IbgeData(BaseModel):
    variavel: str
    unidade: str
    resultados: List[Resultados]
