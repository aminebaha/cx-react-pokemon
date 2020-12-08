const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const router = express.Router()
  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : process.env.HOST, 
      user : process.env.USER,
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  })
router.get('/pokemons', (req,res)=>{
  knex.select().from("pokemon").orderBy('numéro').then((response)=>{
  res.json(response)
})
  })

  router.get('/pokemons/:id', (req,res)=>{
    const number = req.params.id
    knex.select('pokemon.nom as namepok','*').from("pokemon").from('pokemon').innerJoin('moveset', 'pokemon.numéro', '=', 'moveset.moveset_pokemon')
    .innerJoin('move', 'move.nom', '=', 'moveset.moveset_move').where('pokemon.numéro',number).then((response)=>{
    res.json(response)
  })
})
  

module.exports = router;