const express = require("express");
const server = express();

const nunjucks = require("nunjucks");

//Cofigurar rota para o express encontrar arquivos estáticos(css, imgs, scripts)
server.use(express.static("public"))

//Configurando o nunjucks
nunjucks.configure("views", {
    express: server,
    noCache: true,
})

server.get("/",function(req, res){
    console.log("Métis");
    return res.render("metis.html", { metis });
});


// 2 - Rota para pag login (/login)
server.get("/login", function(req, res){
    return res.render("login.html", { login });
});

server.get("/Sobre Nós",function(req, res){
    return res.render("sobrenos.html", { sobre });
});

//"Ligamos" nosso servidor na porta 3001
server.listen(5500);