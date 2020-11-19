const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


function calculationRating (req,res) {
    
}






app.use(bodyParser.json());
app.post('/', calculationRating);
app.get('/busca', (req,res) => {
    res.send({
        nome: "Thiago"
    })
})

app.listen(port, () => {
    console.log("backend iniciado...")
});