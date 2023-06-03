import urllib.request, json, ssl, time
from urls import HOST, URLS
from models import IbgeData

def request ():

    ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
    ctx = ssl._create_unverified_context()
    ctx.options |= 0x4

    for i in URLS:
        res = urllib.request.urlopen(HOST+URLS[i], context=ctx)
        data = json.loads(res.read())
        d = IbgeData(**data[0])
        print(d.dict())
        time.sleep(1)

def main ():
    request()

if __name__ == "__main__":
    main()
