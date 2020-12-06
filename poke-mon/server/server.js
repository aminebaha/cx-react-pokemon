const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
//app.use(express.json());
/*
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
 */
//Require module
//const express = require('express');
// Express Initialize
//const app = express();

const apiRoute = require('./api.js')
app.use(apiRoute)
app.use(cors)

const port = 8000;

app.listen(port,()=> {console.log('listen port '+port);})

//CSS
//app.use(express.static('public'))


   