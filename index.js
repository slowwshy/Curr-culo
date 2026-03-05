const e = require('express');
const express = require('express');
const app = express();
const port = 4141;
  const resume = {
        name: "Arthur Soares de Melo",
        age: "18 years/18 anos",
        local: "Brazil/Brasil, Brasília",
        ability: "Java Script/Node.js, Git/GitHub, MySQL ",
        ability2: "estrutura de dados/data structure",
        ability3: "eficiente e organizado/efficient and organized",
        experience: "digital game programming technician/Técnico em programção de jogos digitais",
        linksG: "https://github.com/slowwshy",
        Email: "mail.google.com/arthurtoon13@gmail.com",
        language: "english, portuguese and german"
                    };

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res){
        res.render('index', {resume})
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));