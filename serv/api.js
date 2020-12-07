const express = require('express')
const cors = require('cors')
const router = express.Router()
//app.use(express.json());

  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'postgres'
    }
  })

 /* app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});*/
//Require module
//const express = require('express');
// Express Initialize
//const app = express();

router.get('/pokemons', (req,res)=>{
  knex.select().from("pokemon").orderBy('numéro').then((response)=>{
  res.send(response)
})
  })
/*
  router.get('/pokemons/:id', (req,res)=>{
  let id = this.props.match.params.id
    knex.select().from("pokemon").where('id',id)
    .then((response)=>{
    res.send(JSON.stringify(response))
  })
    })

    router.post('/pokemons', (req,res)=>{
          knex('pokemon').insert
              (
                {numéro: numéroField},
                {nom: nomFieldField},
                {nomen: nomenField},
                {nomja: nomjaField},
                {nomtm: nnomtmumField},
                {nomde: nomdeField},
                {couleur: couleurField},
                {espece: especeField},
                {type: typeField},
                {taille: tailleField},
                {poids: poidsField},
                {forme: formeField}
          )
          .then((response)=>{
          //res.send(response)
        }).catch((err)=>console.log(err))
    
          
    })*/

module.exports = router;