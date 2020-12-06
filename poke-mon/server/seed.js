
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors)
const pokemonjson = require("./pokedex.json")

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'postgres',
      charset : 'utf8mb4'
    }
  });

knex.schema.hasTable('move').then((exists)=>{
if(!exists){
  return knex.schema.createTable('move',(table)=>{
    // table.increments('id_move').primary()
     table.string('niveau')
     table.string('nom').primary()
     table.string('puissance')
     table.string('precision')
     table.string('pp')

})
}
})

knex.schema.hasTable('pokemon').then((exists)=>{
  if(!exists){
    return knex.schema.createTable('pokemon',(table)=>{
    table.string('numéro').primary()
    table.string('nom')
    table.string('nomen')
    table.string('nomja')
    table.string('nomtm')
    table.string('nomde')
    table.string('couleur')
    table.string('espece')
    table.string('type')
    table.string('taille')
    table.string('poids')
    table.string('forme')

})
}
})


knex.schema.hasTable('moveset').then((exists)=>{
  if(!exists){
    return knex.schema.createTable('moveset',(table)=>{
    table.string('moveset_pokemon').references('numéro').inTable('pokemon')
    table.string('moveset_move').references('nom').inTable('move')

    
    table.primary(['moveset_pokemon','moveset_move'])

})
}
})
insertMove()
insertMoveset()
insertPokemon()

async function insertPokemon(){
    for(const [key,value] of Object.entries(pokemonjson)) {
        let numéroField =  JSON.stringify(value.numéro).toString()
        let nomField =  JSON.stringify(value.nom).toString()
        let nomenField =  JSON.stringify(value.nomen).toString()
        let nomjaField =  JSON.stringify(value.nomja).toString()
        let nomtmField =  JSON.stringify(value.nomtm).toString()
        let nomdeField =  JSON.stringify(value.nomde).toString()
        let couleurField =  JSON.stringify(value.couleur).toString()
        let especeField =  JSON.stringify(value.espece).toString()
        let typeField =  JSON.stringify(value.type1+ ","+value.type2).toString().toString()
        let tailleField =  JSON.stringify(value.taille).toString()
        let poidsField =  JSON.stringify(value.poids).toString()
        let formeField =  JSON.stringify(value.forme).toString()

      knex('pokemon').insert({
      numéro: numéroField,
      nom: nomField,
      nomen: nomenField,
      nomja: nomjaField,
      nomtm: nomtmField,
      nomde: nomdeField,
      couleur: couleurField,
      espece: especeField,
      type: typeField,
      taille: tailleField,
      poids: poidsField,
      forme: formeField}).then(()=>{
        console.log("pokemon insertion")
      }).catch(() =>{});
    
    }
  }

   async function insertMove(){
    for(const [key,value] of Object.entries(pokemonjson)) {
      
      value.attaques.map((att,index)=>{ 
          
          knex('move').insert({
            niveau: JSON.stringify(Object.values(att)[0]).toString(),
            nom: JSON.stringify(Object.values(att)[1]).toString(),
            puissance: JSON.stringify(Object.values(att)[2]).toString(),
            precision: JSON.stringify(Object.values(att)[3]).toString(),
            pp: JSON.stringify(Object.values(att)[4]).toString()})
            .then(()=>{console.log("move insertion")})
            .catch(()=>{})
    
      })
    }
   }
   async function insertMoveset(){
    for(const [key,value] of Object.entries(pokemonjson)) {
      
      value.attaques.map((att,index)=>{ 
        knex('moveset').insert({
          moveset_pokemon : JSON.stringify(value.numéro).toString(),
          moveset_move: JSON.stringify(Object.values(att)[1]).toString()})
          .then(()=>{console.log("moveset insertion")})
          .catch(()=>{})
        })
    }
   }
 
  
