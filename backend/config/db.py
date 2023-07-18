import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv

load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')

uri = f"mongodb+srv://{DB_USER}:{DB_PASS}@cluster0.b5iy3zl.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))
db = client.DAB

def insert_data(collection: str, data):
    db[collection].insert_many(data)

def insert_one(collection: str, data):
    db[collection].insert_one(data)

async def fetch_one(collection: str, search: dict):
    response = db[collection].find_one(search)
    return response

async def fetch_list(collection : str, search : dict):
    response = db[collection].find(search)
    return response
