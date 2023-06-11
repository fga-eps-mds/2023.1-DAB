import urllib.request
import json
import ssl
from script.models import IbgeData
from script.urls import HOST, URLS
from config.db import db

def request ():

    ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
    ctx = ssl._create_unverified_context()
    ctx.options |= 0x4

    for i in URLS:
        req = urllib.request.urlopen(HOST+URLS[i], context=ctx)
        res = req.read()
        data = json.loads(res)

        for d in data:
            info = IbgeData(**d).dict()

            if i == "AVICULTURA":
                db.avicultura.insert_one(info)
            elif i == "SUINOCULTURA":
                db.suinocultura.insert_one(info)
            elif i == "BOVINOCULTURA":
                db.bovinocultura.insert_one(info)
            elif i == "SAFRA":
                db.safra.insert_one(info)

if __name__ == "__main__":
    request()
