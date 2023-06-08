import urllib.request, json, ssl 
from script.models import IbgeData
from script.urls import HOST, URLS
from config.db import db

def request ():

    ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
    ctx = ssl._create_unverified_context()
    ctx.options |= 0x4

    for i in URLS:
        res = urllib.request.urlopen(HOST+URLS[i], context=ctx)
        r = res.read()
        data = json.loads(r)
        
        for d in data:
            info = IbgeData(**d).dict()
            print(info)

            if i == "AVICULTURA":
                db.dab.avicultura.insert_one(info)
            elif i == "SUINOCULTURA":
                db.dab.suinocultura.insert_one(info)
            elif i == "BOVINOCULTURA":
                db.dab.bovinocultura.insert_one(info)
            elif i == "SAFRA":
                db.dab.safra.insert_one(info)


if __name__ == "__main__":
    request()
