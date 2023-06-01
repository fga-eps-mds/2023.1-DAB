from fastapi import FastAPI
from routes.avicultura import avicultura

app = FastAPI()
app.include_router(avicultura)
