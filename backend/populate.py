from script.safra import IbgeSafra
from script.pecuaria import IbgePecuaria

if __name__ == "__main__":
    ibgeSafra = IbgeSafra()
    ibgePecuaria = IbgePecuaria()
    ibgeSafra.insert()
    ibgePecuaria.insert()

