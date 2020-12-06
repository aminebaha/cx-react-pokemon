//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
//import { response } from 'express';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      test:null,
      pokedex:[]
    };
  
  }

  componentDidMount() {
    
    let url = "http://127.0.0.1:8000/"
    var myHeaders = new Headers();
    myHeaders.set('Access-Control-Allow-Origin','*')
    //let cors = {mode: 'no-cors'}
    fetch(url,{
      method:'GET',
      headers : { 
        'Content-Type': 'application/json',
        'Accept':'application/json'
       },
       myHeaders
    })
    .then(resp=>{
      return resp.json()
    })
    .then(data => {
      console.log(data)
     // this.setState({test:data})
      //this.setState({pokedex : data})
    })
      .catch((err)=>{console.log(err)})

  }

  render() {
    return (
      <div>
          <h1> POKEDEX</h1>

          <input placeholder="Search Pokemon"/>
          <ul>
            {this.state.pokedex.map(poke=>
              <a href="http://127.0.0.1:8000/pokemons/{poke.numéro}"> {poke.numéro}{poke.nom}</a>
              )}
          </ul>
      </div>
    )
    }
}

export default App;