import express from 'express';

const host = '0.0.0.0' //todas interfaces de rede pode acessar a nossa aplicaçao

const porta = 3001; //aplicaçao indentificada pelo numero 3000

const app = express();

app.listen(porta,host,() => {
    console.log(`servidor rodando em HTTP://${host}:${porta}`);
})

//diferentemente do metodo GET, que exigia do usuario a passagem de parametros por meio da URL
//iremos nessa aula utilizar o metodo post
//O metodo cria um novo recurso no servidor(um regitro,uma imagem,um comentario,etc)

//poder enviar dados de um jogador usando um formulario em HTML
//A aplicacao devera entregar ou oferecer ta formulario em html
app.get('/jogador'(requisicao,resposta) => {
    //rertornar uma pagina contendo um formulario em HTML
    resposta.write(`
        <html lang = "pt-br">
        <head>
        <meta charset="UTF-8">
        <title>formulario de jogador</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        </head>
        <body>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
        </body>

        </html>
        
        
    `);
    resposta.end();
    
});


//Espera por dados de um formulario html

app.post('/jogador'(requisicao,resposta) => {
    //deve adicionar um novo jogador,causando ou criando um novo estado da aplicaçao.


});

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo a aula</h1>');
})