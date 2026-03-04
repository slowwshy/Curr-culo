var express = require('express');
const app = express();
const port = 4141;
  const curriculo = {
        name: "Arthur Soares de Melo",
        age: "18 years",
        ability: "Java Script/Node.js, Git/GitHub, MySQL, estrutura de dados, eficiente e organizado",
        experience: "Técnico em programção de jogos digitais"
                    };
app.set('view engine', 'ejs');
app.get('/', function(req, res){
        res.render('htss', {curriculo})
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));