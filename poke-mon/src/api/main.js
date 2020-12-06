//Require module
//const express = require('express');
// Express Initialize
//const app = express();
/*
const port = 8000;
app.listen(port,()=> {
console.log('listen port 8000');
})
*/
//CSS
//app.use(express.static('public'))

/*
app.get('/test', (req,res)=>{
    res.send();
    })

fetch("https://github.com/aminebaha/cx-react-pokemon/blob/master/poke-mon/server/pokedex.json")
.then(response => {
    return response.json()
  }).then(response => {
    app.get('/poke',(req,res)=>{
        res.send(response);
})})
*/
const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
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
//CSS
//app.use(express.static('public'))

app.get('/', (req,res)=>{
  
    knex.select().from("pokemon").then((response)=>{
    res.send(response)
  }).catch(()=>{})
    
    })

   