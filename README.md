# observações: Pessoal, eu nao sou dev front end porem fiz meu melhor para a entrega. Como um bom dev não fujo de um desafio!

# Instalação:
    
para instalação e funcionamento desta aplicação siga os steps abaixo:

1. faça o clone do projeto: git@github.com:Hermann91/bill_dispatch.git

2. abra seu terminal e na raiz (bill_dispatch) execute apenas o comando:  docker-compose up
    esse comando fara executar a instalação de todos componentes necessarios seguindo o dockerfile de cada aplicação

3. abra seu navegador em: http://localhost:8888/ faça upload do arquivo e acompanhe os logs pelo terminal da execução da app.

# Sobre o backend

O banckend foi desenvolvido no modelo de microserviço utilizando um microframework (Flask com python)

esse modelo trás performance e baixo consumo de recursos.

Foi desenvolvido uma API que recebe uma chamada com um arquivo no body, a app coleta o arquivo, valida e inicia o processamento.

o backend apenas simula o envio para um servidor smtp, foi criada a lógica e a conexão porem sem credenciais, entao no log aparecera apenas o erro pela tentativa de envio do email com boleto.



# Patterns:
Conceito Solid
paralelismo e concorrência
API REST
code clean
Dados:
    struturas de lista, DataFrame, Json
Sintaxe:
    snack_case
