from pydantic import BaseModel

class Localidade(BaseModel):
    id: str
    nome: str

class Series(BaseModel):
    localidade: Localidade
    serie: dict[str,str]

class Resultados(BaseModel):
    series: list[Series]

class IbgeData(BaseModel):
    id: str
    variavel: str
    unidade: str
    resultados: list[Resultados]
