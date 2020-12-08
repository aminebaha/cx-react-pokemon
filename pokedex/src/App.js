import './App.css';
import React, { Component } from 'react';
import logo from './Pokédex_logo.png';
import butt from './Pokemon-Pokedex.png';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokedex:[],
      currentNum : '',
      currentPokemon : []
    };
  }

async getAllPokemons(){
  let url = "http://localhost:8000/pokemons"
  //let cors = {mode: 'no-cors'}
  await fetch(url)
  .then(response=>{
    response.json().then(data=>{
      this.setState({pokedex:[...this.state.pokedex,...data]})      })
  })
}
async getOnePokemon(){
  let numpoke = "\""+window.location.href.substring(window.location.href.lastIndexOf('/') + 1)+"\"" 
    let url = `http://localhost:8000/pokemons/${numpoke}`
    await fetch(url)
    .then(response=>{
      response.json().then(data=>{
        this.setState({currentPokemon:[...this.state.currentPokemon,...data]})      })
    })
}
  componentDidMount() {
    this.getAllPokemons()
    this.getOnePokemon()
  }
  getNumPokemon(num){
    this.setState({currentNum:num})
    
  }

  render() {
  let numpok,namepoke,namepoken,namepokjap,namepokede,colorpok,especepok,typepok,taillepok,poidspok,formepok
  this.state.currentPokemon.map(p=>{
    numpok = p.numéro
    namepoke=p.namepok
    namepoken = p.nomen
    namepokjap = p.nomja
    namepokede= p.nomde
    colorpok= p.couleur
    especepok= p.espece
    typepok= p.type
    taillepok= p.taille
    poidspok= p.poids
    formepok= p.forme
    
  })
  let nompokurl = window.location.href.substring(window.location.href.lastIndexOf('/'))
  if(numpok!==undefined){
    return (
    <div class="backg">
       <table>
       <tr>     <td>  <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${nompokurl}.png`}/>  </td> 
           <td> <h2 class="details"> {namepoke.replace(/["']/g, "")} </h2>  </td> 
            </tr> 
          <div class="details">
           <label> Details</label><br></br>
          <tr><td>  <label> Nom -> {namepoken.replace(/["']/g, "")} </label></td></tr>
          <tr><td> <label> Nom jap -> {namepokjap.replace(/["']/g, "")} </label></td></tr>
          <tr><td> <label> Nom de -> {namepokede.replace(/["']/g, "")} </label></td></tr>
         </div>
           <div class="details">
           <tr><td>   <label> Couleur -> {colorpok.replace(/["']/g, "")} </label> </td></tr>
           <tr><td> <label> Espece -> {especepok.replace(/["']/g, "")} </label></td></tr>
           <tr><td>  <label> Type -> {typepok.replace(/["']/g, "")} </label></td></tr>
           </div>
        <div class="details">
        <tr><td>  <label> Taille -> {taillepok.replace(/["']/g, "")} </label></td></tr>
        <tr><td> <label> Poids -> {poidspok.replace(/["']/g, "")} </label></td></tr>
        <tr><td><label> Forme -> {formepok.replace(/["']/g, "")} </label></td></tr>
        <br></br>
        <label>Attaques</label>
         </div>
         <br></br>
    {this.state.currentPokemon.map((poke,key)=>{
     return( 
    <div>
        <div>
         <div class="details">
           
         <tr> <label> {poke.nom.replace(/["']/g, "")} </label>
          <label> | {poke.niveau.replace(/["']/g, "")} </label>
         <label> | {poke.puissance.replace(/["']/g, "")} </label>
         <label> | {poke.precision.replace(/["']/g, "")} </label>
         </tr>
         </div> 
         </div>
       </div>

     )
     
    })}
       <a href="/pokemons"> 
       <img className="button-class" src={butt}/>
       </a> 
    </table>
    </div>

)
  }else{
  
      return (<div className="App">
            <img src={logo} />
              {this.state.pokedex.map((poke,key)=>{
               return( 
                  <div  onClick={()=>{
                   {window.location.href=`${poke.numéro.replace(/["']/g, "")}`}
                   this.getNumPokemon()
                  }}>
                   <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${poke.numéro.replace(/["']/g, "")}.png`}/>
                   </div>
               )
              })}
         
              </div>

      )
            }
}
}

export default App;
