const express = require('express');
const app = express();
const port = 4141;
  const resume = {
        name: "Arthur Soares de Melo",
        age: "18 years/18 anos",
        ability: "Java Script/Node.js, Git/GitHub, MySQL, estrutura de dados/data structure, eficiente e organizado/efficient and organized",
        experience: "digital game programming technician/Técnico em programção de jogos digitais",
        linksG: "https://github.com/slowwshy",
        Email: "mail.google.com/arthurtoon13@gmail.com"
                    };
app.set('view engine', 'ejs');

app.get('/', function(req, res){
        res.render('htss', {resume})
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));