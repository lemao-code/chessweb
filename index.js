const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const knex = require('./src/config/db')


function calculationRating (req,res) {
    
}

app.use(bodyParser.json());
app.post('/', calculationRating);
app.get('/busca', async (req,res) => {
    knex('players')
    .then((results) => {
        return res.json(results)
    })
})

app.listen(port, () => {
    console.log("backend iniciado...")
});