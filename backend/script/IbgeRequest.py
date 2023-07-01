import ssl
import json
import urllib.request
from script.models import IbgeData

class IbgeRequest:
    def __init__(self) -> None:
        pass

    HOST="https://servicodados.ibge.gov.br/api/v3/agregados/"

    def request(self, query: str) -> list[IbgeData]:
        url = self.HOST+query

        ctx = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
        ctx = ssl._create_unverified_context()
        ctx.options |= 0x4

        req = urllib.request.urlopen(url, context=ctx)
        res = req.read()
        json_data = json.loads(res)
        data_list: IbgeData = []
        for data in json_data:
            ibgeData = IbgeData(**data)
            data_list.append(ibgeData)

        return data_list

