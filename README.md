# 🌾 Dados sobre o Agronegócio Brasileiro - DAB

<a href="https://codeclimate.com/github/fga-eps-mds/2023.1-DAB/maintainability"><img src="https://api.codeclimate.com/v1/badges/206eaafe919a26289f48/maintainability" /></a> <a href="https://codeclimate.com/github/fga-eps-mds/2023.1-DAB/test_coverage"><img src="https://api.codeclimate.com/v1/badges/206eaafe919a26289f48/test_coverage" /></a> 

Este projeto é um website que tem como objetivo exibir informações e dados sobre o agronegócio brasileiro, incluindo informações sobre plantio e cultivo da produção agrícola e pecuária.

## Rodando o projeto

### Banco de Dados

Primeiro é necessário subir um banco MongoDB.

Altere o arquivo `.envsample`, com as credências do seu usuário e mude o nome
do arquivo para `.env`.

Execute o seguinte comando para popular o banco.

```sh
python3 poputale.py
```

### Backend

Primeiro, é necessário instalar as depedências do projeto. É recomendado à utilização
de um ambiente virtual, como o [Virtualenv](https://virtualenv.pypa.io/en/latest/).

As depedências do projeto são gerenciadas com a ferramenta [pip-tools](https://github.com/jazzband/pip-tools).
Execute o seguinte comando para instalá-lo:

```sh
pip install pip-tools
```

Em seguida execute o seguinte comando para instalar todas as depedências
do projeto

```sh
pip-sync backend/requirements/*.txt
```

Inicie o servidor com

```sh
cd backend
uvicorn app:app --reload
```
O servidor por padrão é iniciado na porta 8000.

Acesse `localhost:8000/docs` para ver o documentação no Swagger.

### Frontend

Acesse o diretório frontend e instale as dependências com `npm install`. Agora basta executar:

```sh
ng serve
```
Pronto! A aplicação estará funcionando na porta 4200.

### :handshake:  Colaboradores:

|![Millena](https://github.com/MillenaQueiroz.png) |![Mayara](https://github.com/Mayara-tech.png)|![Breno](https://github.com/brenob6.png)|![Henrique](https://github.com/henriqtorresl.png)|![Pedro Henrique](https://github.com/Muniz2811.png)|![Gabriel Evaristo](https://github.com/evinhassoft.png)|
| - | - | - | - | - | - |
|[Millena Queiroz](https://github.com/MillenaQueiroz)|[Mayara](https://github.com/Mayara-tech)|[Breno](https://github.com/brenob6)|[Henrique](https://github.com/henriqtorresl)|[Pedro Henrique](https://github.com/Muniz2811)|[Gabriel Evaristo](https://github.com/evinhassoft)|

### 📝 Licença:

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE.md para obter mais informações.
