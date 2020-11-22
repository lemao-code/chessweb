const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const knex = require('./src/config/db')


function calculationRating (req,res) {

        const winner = req.body.winner;
        const loser = req.body.loser;
        let newRating = 0;
        let pe = 0;
        let sup = 0;
        let inf = 0;
        let floatinzinho = 0.01;

        if(winner.rating > loser.rating) {
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

       if(winner.rating > loser.rating) {
            newRating = winner.rating + 10 * (1.0 - (sup * floatinzinho));
            console.log(`new rating::::: ${Math.round(newRating)}`);
       }else {
           newRating = winner.rating + 10 * (1.0 - (inf * floatinzinho));
           console.log(`new rating::::: ${Math.round(newRating)}`);
       }


}

app.use(bodyParser.json());
app.post('/calculo', calculationRating);
app.get('/busca', async (req,res) => {
    knex('players')
    .then((results) => {
        return res.json(results)
    })
})

app.listen(port, () => {
    console.log("backend iniciado...")
});