import urllib.request, json
import ssl

from models import IbgeData

ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
ctx.options |= 0x4


def request (path: str):
    host = "https://servicodados.ibge.gov.br"
    res = urllib.request.urlopen(host+path, context=ctx)
    data = json.loads(res.read())
    d = IbgeData(**data[0])
    print(d.dict())

def main ():
    path = "/api/v3/agregados/6832/periodos/201804%7C201901/variaveis/29?localidades=N1[all]&classificacao=12716[115236]"
    request(path)
