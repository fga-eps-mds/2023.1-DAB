from fastapi import APIRouter

from config.db import db

avicultura = APIRouter()

router = "avicultura/"

@avicultura.get(f"{router}producao")
async def quatidade_ovos_produzidos():
    db.dab.avinocultura.producao.find()

@avicultura.get(f"{router}cabecas")
async def numero_cabecas():
    db.dab.avinocultura.cabecas.find()
