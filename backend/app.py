from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.avicultura import avicultura
from routes.suinocultura import suinocultura
from routes.bovinocultura import bovinocultura
from routes.populacao import populacao
from routes.safra import safra

app = FastAPI()

description = """

Dados do agronegócio brasileiro.

"""

app = FastAPI(title="DAB API", description=description)

app.include_router(avicultura)
app.include_router(bovinocultura)
app.include_router(suinocultura)
app.include_router(safra)
app.include_router(populacao)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)
