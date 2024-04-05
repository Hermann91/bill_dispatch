

# Flask processng payments Generator API

Este é um aplicativo Flask que fornece uma API para processar um arquivo CSV, gerar boletos com base nos dados do arquivo e enviá-los por e-mail.

## Pré-requisitos

- Python 3.12
- Flask
- Pandas

## Instalação

1. Clone este repositório:

2. Instale as dependências que estao todas no arquivo requirements.txt

## Configuração

1. Configure as informações do servidor SMTP no arquivo `.env`:

SMTP_SERVER = 'smtp.example.com'
SMTP_PORT = 587
SMTP_USER = 'seu_email@example.com'
SMTP_PASS = 'sua_senha'


## Inicie o servidor Flask (essa forma é pra executar localmente):
## cmd:
python run.py runserer --host=0.0.0.0


Acesse a API usando um cliente HTTP (por exemplo, cURL, Postman, etc.) para enviar um arquivo CSV. A API está disponível em:

http://127.0.0.1:5000/api/v1/procesing-csv-file

## executar via docker (no terminal vai até a pasta raiz do projeto e digite os comandos abaixo):

docker build -t payments .

## após o build

docker run -p 5002:5000 <nome da imagem gerada no build>

## api do docker:
http://0.0.0.0:5002/api/v1/procesing-csv-file

