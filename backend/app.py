from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.avinocultura import avicultura
from routes.suinocultura import suinocultura
from routes.bovinocultura import bovinocultura
from routes.safra import safra

app = FastAPI()

description = """
DAB API dados sobre o agronegócio brasileiro.
"""

tags_description = [
    {
        "name": "avicultura",
        "description": "Consulte dados sobre a população ..."
    },
    {
        "name": "suinocultura",
    },
    {
        "name": "bovinocultura"
    }
]

app = FastAPI(title="DAB", description=description, openapi_tags=tags_description)

app.include_router(avicultura)
app.include_router(suinocultura)
app.include_router(bovinocultura)
app.include_router(safra)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)
