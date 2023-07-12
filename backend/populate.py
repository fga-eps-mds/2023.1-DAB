from script.IbgeSafra import IbgeSafra
from script.IbgePecuaria import IbgePecuaria
from script.IbgePopulacao import IbgePopulacao

if __name__ == "__main__":
   ibgeSafra = IbgeSafra()
   ibgePecuaria = IbgePecuaria()
   ibgePopulacao = IbgePopulacao()
   ibgeSafra.insert()
   ibgePecuaria.insert()
   ibgePopulacao.insert()
