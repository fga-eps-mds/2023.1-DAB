FROM python:3.10.10-alpine AS build

WORKDIR /app

RUN apk add --no-cache libpq-dev build-base

RUN pip install --no-cache-dir pip-tools -vvv

RUN mkdir -p requirements

COPY requirements requirements

RUN pip-sync requirements/*.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["uvicorn","app:app", "--host", "0.0.0.0"]
