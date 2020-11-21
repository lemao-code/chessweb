const axios = require('axios');

async function obterJogadores () {
    const result  = await axios.get('http://localhost:3000/busca');
    console.log("///////////////////////////");
    console.log(result.data);
    console.log("///////////////////////////");
    return result.data
}


module.exports = {
    obterJogadores
}