var pg = require("pg")
var pgtools = require("pgtools")


var connectionString = "pg://postgres:postgres@localhost:5432/";
var client = new pg.Client(connectionString);
client.connect();
pgtools.createdb({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: 'localhost'
  }, 'pokemons', function (err, res) {
    if (err) {
      console.error(err);
      process.exit(-1);
    }
    console.log(res);
  });
//  .query('CREATE TABLE IF NOT EXISTS  Pokemon ( id TEXT NOT NULL PRIMARY KEY, data JSONB NOT NULL)')

  client
  .query('CREATE TABLE IF NOT EXISTS pokemon (id serial NOT NULL PRIMARY KEY, infos JSONB)')


  let id = 1
  let test = 'test'
  client
  .query('INSERT INTO pokemon (infos) VALUES(\'{ "name": `${test}}\`) ')



  client.query('SELECT * FROM pokemon') 
  .then(res => console.log(res.rows[0]))
  .catch(e => console.error(e.stack))