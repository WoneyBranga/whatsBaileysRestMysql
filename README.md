# Whasapp com Baileys + REST + Peruntas dinâmicas no Mysql 

exemplo de bot para interações com whatsapp utilizando biblioteca @adiwajshing/baileys

## Instalação:

```
git clone https://github.com/WoneyBranga/whatsBaileysRestMysql
npm install

# configuração do banco
criar usuário e banco mysql.
ajustar parametros de conexao no arquivo db.js
criar tabelas de de acordo com tables.js

node app.js
```

## Utilização

### peguntas dinamicas mysql
Popule as suas pertuntas e resposta na tabela e então inicie a aplicação

### API
As rotas disponíveis da API e exemplos de requisição podem ser visualizados no arquivo rest.http