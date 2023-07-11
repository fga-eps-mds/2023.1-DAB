from pydantic import BaseModel

class Localidade(BaseModel):
    id: str
    nome: str

class Series(BaseModel):
    localidade: Localidade
    serie: dict[str,str]

class Classificacoes(BaseModel):
    categoria: dict[str, str]

class Resultados(BaseModel):
    series: list[Series]
    classificacoes: list[Classificacoes]

class IbgeData(BaseModel):
    id: str
    variavel: str
    unidade: str
    resultados: list[Resultados]

class ChartData(BaseModel):
    id: str
    locale: None | str
    categoria: None | str
    type: str
    title: str
    labels: list[str]
    dataList: list[str]
