from fastapi import FastAPI
from routes.avicultura import avinocultura
from routes.suinocultura import suinocultura
from routes.bovinocultura import bovinocultura
from routes.safra import safra
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(avinocultura)
app.include_router(suinocultura)
app.include_router(bovinocultura)
app.include_router(safra)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
)