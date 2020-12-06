const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
//app.use(express.json());
app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

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
 
//Require module
//const express = require('express');
// Express Initialize
//const app = express();
router.get('/pokemons', (req,res)=>{
  
  knex.select().from("pokemon").then((response)=>{
  res.send(response)
})
  })

  router.get('/pokemons/:id', (req,res)=>{
  let id = this.props.match.params.id
    knex.select().from("pokemon").where('id',id)
    .then((response)=>{
    res.send(response)
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
    
          
    })

module.exports = router;