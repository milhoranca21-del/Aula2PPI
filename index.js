import express from 'express';

const host = '0.0.0.0' //todas interfaces de rede pode acessar a nossa aplicaçao

const porta = 3001; //aplicaçao indentificada pelo numero 3000

const app = express();

// necessário para receber dados do formulario via POST
app.use(express.urlencoded({ extended: true }));

app.listen(porta, host, () => {
    console.log(`servidor rodando em HTTP://${host}:${porta}`);
})

//diferentemente do metodo GET, que exigia do usuario a passagem de parametros por meio da URL
//iremos nessa aula utilizar o metodo post
//O metodo cria um novo recurso no servidor(um regitro,uma imagem,um comentario,etc)

//poder enviar dados de um jogador usando um formulario em HTML
//A aplicacao devera entregar ou oferecer ta formulario em html
app.get('/jogador',(requisicao, resposta) => {
    //rertornar uma pagina contendo um formulario em HTML
    resposta.write(`
        <html lang = "pt-br">
        <head>
        <meta charset="UTF-8">
        <title>formulario de jogador</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
        <form class="row gy-2 gx-3 align-items-center" method="POST" action="/jogador">
  <div class="col-auto">
    <label class="visually-hidden" for="nome">Nome do jogador</label>
    <input type="text" class="form-control" id="nome" name="nome">
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="autoSizingInputGroup" name="username" placeholder="Username">
    </div>
  </div>
  <div class="col-auto">
    <label class="visually-hidden" for="autoSizingSelect">Preference</label>
    <select class="form-select" id="autoSizingSelect" name="nivel">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck" name="lembrar">
      <label class="form-check-label" for="autoSizingCheck">
        Remember me
      </label>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
        
        </body>
        </html>
    `);
    resposta.end();

});


//Espera por dados de um formulario html

app.post('/jogador',(requisicao, resposta) => {
    //deve adicionar um novo jogador,causando ou criando um novo estado da aplicaçao.

    const nome = requisicao.body.nome;
    const username = requisicao.body.username;
    const nivel = requisicao.body.nivel;
    const lembrar = requisicao.body.lembrar;

    resposta.write(`
        <h1>Jogador cadastrado</h1>
        <p>Nome: ${nome}</p>
        <p>Username: ${username}</p>
        <p>Nível: ${nivel}</p>
        <p>Lembrar: ${lembrar ? "Sim" : "Não"}</p>
        <a href="/jogador">Voltar</a>
    `);
    resposta.end();

});

app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo a aula</h1>');
});