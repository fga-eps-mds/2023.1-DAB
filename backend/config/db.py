from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
import os

load_dotenv()

DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')

uri = f"mongodb+srv://{DB_USER}:{DB_PASS}@cluster0.b5iy3zl.mongodb.net/?retryWrites=true&w=majority"

db = MongoClient(uri, server_api=ServerApi('1'))
