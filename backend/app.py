from fastapi import FastAPI
from routes.avicultura import avicultura
from routes.suinocultura import suinocultura
from routes.bovinocultura import bovinocultura
from routes.safra import safra

app = FastAPI()
app.include_router(avicultura)
app.include_router(suinocultura)
app.include_router(bovinocultura)
app.include_router(safra)
