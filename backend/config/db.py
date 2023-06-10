import os

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from pymongo.collection import Collection
from dotenv import load_dotenv

load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')

uri = f"mongodb+srv://{DB_USER}:{DB_PASS}@cluster0.b5iy3zl.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))
db = client.DAB

async def fetch_data(collection : Collection, search : dict):
    response = collection.find_one(search)
    return response
