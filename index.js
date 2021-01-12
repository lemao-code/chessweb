const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3333;
const knex = require('./src/config/db')
const cors = require('cors');


async function calculationRating (p1,p2,draw) {
    
        try {
            const winner = p1;
            const loser = p2;
            let empate = draw;
            let newRatingWinner = 0;
            let newRatingLoser = 0;
            let newRatingEmpateP1 = 0;
            let newRatingEmpateP2 = 0;
            let table1
            let table2
            let pe = 0;
            let sup = 0;
            let inf = 0;
            let floatinzinho = 0.01;
            const dateGame = new Date()
//organização das tabelas players VS players
            if(p1.id < p2.id) {
                table1 = p1.id
                table2 = p2.id
            }else {
                table1 = p2.id
                table2 = p1.id
            }

            if(empate.true) {
                if(p1.rating > p2.rating) {
                    pe = p1.rating - p2.rating
                }else {
                    pe = p2.rating - p1.rating
                }
            }
            else if(winner.rating > loser.rating) {
                pe = winner.rating - loser.rating
            } else {
                pe = loser.rating - winner.rating
            }

            if(pe >= 0 && pe <= 3) {
                sup = 50;
                inf = 50;
            }
            if(pe >= 4 && pe <= 10) {
                sup = 51;
                inf = 41;
            }
            if(pe >= 11 && pe <= 17) {
                sup = 52;
                inf = 48;
            }
            if(pe >= 18 && pe <= 25) {
                sup = 53;
                inf = 47;
            }
            if(pe >= 26 && pe <= 32) {
                sup = 54;
                inf = 46;
            }
            if(pe >= 33 && pe <= 39) {
                sup = 55;
                inf = 45;
            }
            if(pe >= 40 && pe <= 46) {
                sup = 56;
                inf = 44;
            }
            if(pe >= 47 && pe <= 53) {
                sup = 57;
                inf = 43;
            }
            if(pe >= 54 && pe <= 61) {
                sup = 58;
                inf = 42;
            }
            if(pe >= 62 && pe <= 68) {
                sup = 59;
                inf = 41;
            }
            if(pe >= 69 && pe <= 76) {
                sup = 60;
                inf = 40;
            }
            if(pe >= 77 && pe <= 83) {
                sup = 61;
                inf = 39;
            }
            if(pe >= 84 && pe <= 91) {
                sup = 62;
                inf = 38;
            }
            if(pe >= 92 && pe <= 98) {
                sup = 63;
                inf = 37;
            }
            if(pe >= 99 && pe <= 106) {
                sup = 64;
                inf = 36;
            }
            if(pe >= 107 && pe <= 113) {
                sup = 65;
                inf = 35;
            }
            if(pe >= 114 && pe <= 121) {
                sup = 66;
                inf = 34;
            }
            if(pe >= 122 && pe <= 129) {
                sup = 67;
                inf = 33;
            }
            if(pe >= 130 && pe <= 137) {
                sup = 68;
                inf = 32;
            }
            if(pe >= 138 && pe <= 145) {
                sup = 69;
                inf = 31;
            }
            if(pe >= 146 && pe <= 153) {
                sup = 70;
                inf = 30;
            }
            if(pe >= 154 && pe <= 162) {
                sup = 71;
                inf = 29;
            }
            if(pe >= 163 && pe <= 170) {
                sup = 72;
                inf = 28;
            }
            if(pe >= 171 && pe <= 179) {
                sup = 73;
                inf = 27;
            }
            if(pe >= 180 && pe <= 188) {
                sup = 74;
                inf = 26;
            }
            if(pe >= 189 && pe <= 197) {
                sup = 75;
                inf = 25;
            }
            if(pe >= 198 && pe <= 206) {
                sup = 76;
                inf = 24;
            }
            if(pe >= 207 && pe <= 215) {
                sup = 77;
                inf = 23;
            }
            if(pe >= 216 && pe <= 225) {
                sup = 78;
                inf = 22;
            }
            if(pe >= 226 && pe <= 235) {
                sup = 79;
                inf = 21;
            }
            if(pe >= 236 && pe <= 245) {
                sup = 80;
                inf = 20;
            }
            if(pe >= 246 && pe <= 256) {
                sup = 81;
                inf = 19;
            }
            if(pe >= 257 && pe <= 267) {
                sup = 82;
                inf = 18;
            }
            if(pe >= 268 && pe <= 278) {
                sup = 83;
                inf = 17;
            }
            if(pe >= 279 && pe <= 290) {
                sup = 84;
                inf = 16;
            }
            if(pe >= 291 && pe <= 302) {
                sup = 85;
                inf = 15;
            }
            if(pe >= 303 && pe <= 315) {
                sup = 86;
                inf = 14;
            }
            if(pe >= 316 && pe <= 328) {
                sup = 87;
                inf = 13;
            }
            if(pe >= 329 && pe <= 344) {
                sup = 88;
                inf = 12;
            }
            if(pe >= 345 && pe <= 357) {
                sup = 89;
                inf = 11;
            }
            if(pe >= 358 && pe <= 374) {
                sup = 90;
                inf = 10;
            }
            if(pe >= 375 && pe <= 391) {
                sup = 91;
                inf = 9;
            }
            if(pe >= 392 && pe <= 411) {
                sup = 92;
                inf = 8;
            }
            if(pe >= 412 && pe <= 432) {
                sup = 93;
                inf = 7;
            }
            if(pe >= 433 && pe <= 456) {
                sup = 94;
                inf = 6;
            }
            if(pe >= 457 && pe <= 484) {
                sup = 95;
                inf = 5;
            }
            if(pe >= 485 && pe <= 517) {
                sup = 96;
                inf = 4;
            }
            if(pe >= 518 && pe <= 559) {
                sup = 97;
                inf = 3;
            }
            if(pe >= 560 && pe <= 619) {
                sup = 98;
                inf = 2;
            }
            if(pe >= 620 && pe <= 735) {
                sup = 99;
                inf = 1;
            }
            if(pe > 735) {
                sup = 100;
                inf = 0;
            }
            if(empate.true) {                
                if(p1.rating >= p2.rating) {
                    newRatingEmpateP1 = Math.round(p1.rating + 10 * (0.5 - (sup * floatinzinho)));
                    await knex.select('id').from('players').where({id: p1.id}).update({rating: newRatingEmpateP1,empates_totais: p1.empates_totais + 1});
                    newRatingEmpateP2 = Math.round(p2.rating + 10 * (0.5 - (inf * floatinzinho)));
                    await knex.select('id').from('players').where({id: p2.id}).update({rating: newRatingEmpateP2, empates_totais: p2.empates_totais + 1});
                    
                    //tabelas respectivos players
                    const empates = await knex.select('empates').from(`p${table1}_p${table2}`).where({id_player:p1.id});
                    const empates2 = await knex.select('empates').from(`p${table1}_p${table2}`).where({id_player: p2.id});
                    await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player:p1.id}).update({empates: empates[0].empates + 1})
                    await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player:p2.id}).update({empates: empates2[0].empates + 1})
                    await knex('lastmatchs').insert({p1: p1.name, p2: p2.name, empate: 1, data:dateGame})

                }else {
                    newRatingEmpateP1 = Math.round(p1.rating + 10 * (0.5 - (inf * floatinzinho)));
                    await knex.select('id').from('players').where({id: p1.id}).update({rating: newRatingEmpateP1,empates_totais: p1.empates_totais + 1});
                    newRatingEmpateP2 = Math.round(p2.rating + 10 * (0.5 - (sup * floatinzinho)));
                    await knex.select('id').from('players').where({id: p2.id}).update({rating: newRatingEmpateP2, empates_totais: p2.empates_totais + 1});
                    
                    //tabelas respectivos players
                    const empates = await knex.select('empates').from(`p${table1}_p${table2}`).where({id_player: p1.id});
                    const empates2 = await knex.select('empates').from(`p${table1}_p${table2}`).where({id_player: p2.id});
                    await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player:p1.id}).update({empates: empates[0].empates + 1})
                    await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player:p2.id}).update({empates: empates2[0].empates + 1})
                    await knex('lastmatchs').insert({p1:p1.name, p2:p2.name, empate: 0, data:dateGame})
                }
            }else {
                    //Aqui calculamos o rating do vencedor
                        if(winner.rating >= loser.rating) {
                            newRatingWinner = Math.round(winner.rating + 10 * (1.0 - (sup * floatinzinho)));
                            await knex.select('id').from('players').where({id: winner.id}).update({vitorias_total: winner.vitorias_total + 1, rating: newRatingWinner});
                            //aqui calculmos o rating do loser
                            newRatingLoser = Math.round(loser.rating + 10 * (0.0 - (inf * floatinzinho)));
                            await knex.select('id').from('players').where({id: loser.id}).update({derrotas_total: loser.derrotas_total + 1, rating: newRatingLoser});
        
        
                            const vitorias = await knex.select('vitorias').from(`p${table1}_p${table2}`).where({id_player: winner.id})
                            const derrotas = await  knex.select('derrotas').from(`p${table1}_p${table2}`).where({id_player: loser.id})
                            await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player: winner.id}).update({vitorias: vitorias[0].vitorias + 1 })
                            await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player: loser.id}).update({derrotas: derrotas[0].derrotas + 1 })
        
        
                        }else {
                            //winner
                            newRatingWinner = Math.round(winner.rating + 10 * (1.0 - (inf * floatinzinho)));
                            await knex.select('id').from('players').where({id: winner.id}).update({vitorias_total: winner.vitorias_total + 1, rating: newRatingWinner});
                        
                            //loser
                            newRatingLoser = Math.round(loser.rating + 10 * (0.0 - (sup * floatinzinho)));
                            await knex.select('id').from('players').where({id: loser.id}).update({derrotas_total: loser.derrotas_total + 1, rating: newRatingLoser});
        
                            const vitorias = await knex.select('vitorias').from(`p${table1}_p${table2}`).where({id_player: winner.id})
                            const derrotas = await  knex.select('derrotas').from(`p${table1}_p${table2}`).where({id_player: loser.id})
                            await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player: winner.id}).update({vitorias: vitorias[0].vitorias + 1 })
                            await knex.select('id_player').from(`p${table1}_p${table2}`).where({id_player: loser.id}).update({derrotas: derrotas[0].derrotas + 1 })
                        }
                        await knex('lastmatchs').insert({p1: winner.name, p2: loser.name, data:dateGame})
            }
           
            return true
        }catch(err) {
            return console.log(err)
        }
}


async function getDataPlayers (req,res) {
   let responseCalculation
    try {
        const nameP1 = req.body.p1
        const nameP2 =  req.body.p2
        const empate = req.body.empate
        const responsep1 = await knex('players').where({name: nameP1}) 
        const responsep2 = await knex('players').where({name: nameP2})
        responseCalculation =  await calculationRating(responsep1[0], responsep2[0],empate)
        
    }catch(err) {
        console.log(` error aqui ein ${err}`)
    }
   
    if(responseCalculation) {
        return res.sendStatus(200)
    }else {
        return res.sendStatus(404)
    }
}

async function dataPerfil (req,res) {
    let p1
    let p2
    let p3
    let p4
    let p5
    const id  = req.body.id
    const perfilplayer =  await knex('players').where({id: id})
    if(id == 1) {
        p2 = await knex('p1_p2')
        p3 = await knex('p1_p3')
        p4 = await knex('p1_p4')
        p5 = await knex('p1_p5')
        return res.send({
    
                "perfil": perfilplayer,
                "contras": [{
                    "p2": p2
                },
                    {"p3": p3},
                    {"p4": p4},
                    {"p5": p5
                }]
         
        })
    }

    if(id == 2) {
        p1 = await knex('p1_p2')
        p3 = await knex('p2_p3')
        p4 = await knex('p2_p4')
        p5 = await knex('p1_p5')
        return res.send({

                "perfil": perfilplayer,
                "contras": [{
                    "p1": p1},
                    {"p3": p3},
                    {"p4": p4},
                    {"p5": p5
                }]
     
        })
    }
    if(id == 3) {
        p1 = await knex('p1_p3')
        p2 = await knex('p2_p3')
        p4 = await knex('p3_p4')
        p5 = await knex('p3_p5')
        return res.send({
         
                "perfil": perfilplayer,
                "contras": [{
                    "p1": p1},
                    {"p2": p2},
                    {"p4": p4},
                    {"p5": p5
                }]
       
        })
    }
    if(id == 4) {
        p1 = await knex('p1_p4')
        p2 = await knex('p2_p4')
        p3 = await knex('p3_p4')
        p5 = await knex('p4_p5')
        return res.send({
                "perfil": perfilplayer,
                "contras": [{
                    "p1": p1},
                    {"p2": p2},
                    {"p3": p3},
                    {"p5": p5
                }]
          
        })
    }

    if(id == 5) {
        p1 = await knex('p1_p5')
        p2 = await knex('p2_p5')
        p3 = await knex('p3_p5')
        p4 = await knex('p4_p5')
        return res.send({
                "perfil": perfilplayer,
                "contras": [{
                    "p1": p1},
                    {"p2": p2},
                    {"p3": p3},
                    {"p4": p4
                }]
           
        })
    }
    
}
app.use(cors())
app.use(bodyParser.json())
app.post('/addmatch', getDataPlayers)
app.get('/busca', async (req,res) => {
    knex('players')
    .then((results) => {
        return res.json(results)
    })
})
app.get('/lastmatchs', async (req,res) => {
    knex('lastmatchs')
    .then(async (results) => {
      return res.json(results)
    })
})

app.post('/perfil', dataPerfil)
app.listen(port, () => {
    console.log("backend iniciado...")
});