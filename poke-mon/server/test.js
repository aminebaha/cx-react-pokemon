const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
//app.use(express.json());
app.use(cors)

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
  })
  const pokemonjson = require("./pokedex.json")
  let tab=[]
  let attaks = []
  for(const [key,value] of Object.entries(pokemonjson)) {
    
  value.attaques.map((att,index)=>{ 
    
    attaks.push(Object.values(att)) 
    console.log(Object.values(att),value.numéro)
    knex('moveset').insert({
      moveset_pokemon : JSON.stringify(value.numéro).toString(),
      moveset_move: JSON.stringify(Object.values(att)).toString()})
      .then(()=>{console.log("tt222")})
      .catch(()=>{})

      knex('move').insert({
        niveau: JSON.stringify(Object.values(att)[0]).toString(),
        nom: JSON.stringify(Object.values(att)[1]).toString(),
        puissance: JSON.stringify(Object.values(att)[2]).toString(),
        precision: JSON.stringify(Object.values(att)[3]).toString(),
        pp: JSON.stringify(Object.values(att)[4]).toString()})
        .then(()=>{console.log("tt")})
        .catch(()=>{})

  })
  }


  
  //console.log(attaks)
  //console.log(tab[0][0]) // NUMERO
 //console.log(tab[0].attaques[key])
 // console.log(tab) 
 
  /*
for(let i=0;i<obj.length;i++) {
//if(arraymove.has())
  for(let j=0;j<obj[i].length;j++) 
  { 
    knex('move').insert({
      niveau: obj[i][j].niveau,
      nom: obj[i][j].nom,
      puissance: obj[i][j].puissance,
      precision: obj[i][j].precision,
      pp: obj[i][j].pp})
      .then(()=>{console.log("tt")})
      .catch(()=>{})
  
  
      knex('moveset').insert({
        moveset_pokemon : JSON.stringify(obj[i][j].numéro).toString(),
        moveset_move: obj[i][j].nom})
        .then(()=>{console.log("tt222")})
        .catch(()=>{})
  
    }
   // arraymoveset.add(obj[i][j].nom)
  }*/

/*
{
  niveau: 'Départ',
  nom: 'Charge',   
  puissance: '35', 
  precision: '95', 
  pp: '35'
}
[
    '053',
    'Persian',
    'Persian',
    'ペルシアン',
    'Persian',
    'Perushian',
    'Snobilikat',
    'ArtworkdePersianpour{{RFVF}}',
    '053',
    '137',
    '139',
    '242',
    'Normal',
    'Chadeville',
    '1.0',
    '32.0',
    'Échauffement',
    'Technicien',
    'Tension',
    'Sol',
    '5120',
    '+2Vit.',
    '148',
    '1000000',
    '.5',
    '90',
    'Jaune',
    '8',
    'Persian',
    '053',
    'Génération1',
    'PersianRB.png',
    '[[PokémonDonjonMystère]]',
    'Persian-DM.png{{!}}x150px',
    'oui',
    'non',
    'oui',
    'non',
    'non',
    [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ]
  ],


knex.select('pokemon.nom as a','move.nom').from('pokemon').innerJoin('moveset', 'pokemon.numéro', '=', 'moveset.moveset_pokemon')
.innerJoin('move', 'move.nom', '=', 'moveset.moveset_move').then((resp)=>{
    console.log(resp)
})
*/