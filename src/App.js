import './App.css';
import { BrowserRouter, Switch,  Route, Link } from "react-router-dom";
import Inicio from './components/Inicio';
import Pokedex from './components/Pokedex';
import Regiones from './components/Regiones';
import Elementos from './components/Elementos';
import React, { useState } from 'react';

function App() {
  const [Mostrar, setMostrar] = useState(false)
  const [texto,setTexto] = useState({
    nombreNumero:'',
  });

  const cambio = (event) => {   
    setTexto ({    
      [event.target.name] : event.target.value.trim(),
    })
  };

  const enviar = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
            <Link className="navbar-brand me-auto" to="/" onClick={() => setMostrar(false)} >Pokémon</Link>
            <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="me-auto"></ul>
              <ul className="nav navbar-nav">
                <li className="nav-item"><Link className="nav-link" to="/" onClick={() => setMostrar(false)}>Inicio</Link></li>      
                <li className="nav-item"><Link className="nav-link" to="/Pokedex" onClick={() => setMostrar(true)}>Pokedex</Link></li>                 
                <li className="nav-item"><Link className="nav-link" to="/Regiones" onClick={() => setMostrar(false)}>Regiones</Link></li> 
                <li className="nav-item"><Link className="nav-link" to="/Elementos" onClick={() => setMostrar(false)}>Elementos</Link></li>                           
              </ul> 
              {Mostrar && (
                <form className="form-inline" onSubmit = {enviar}>
                  <input type="text" name="nombreNumero" value = {texto.nombreNumero} onChange ={cambio} placeholder="Nombre o número"></input>
                  <button className="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
              </form>  
              )}
                       
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/">
            <Inicio/>
          </Route>
          <Route exact path="/Pokedex">
            <Pokedex nombreNumero={texto.nombreNumero}/>
          </Route>
          <Route exact path="/Regiones">
            <Regiones/>
          </Route>
          <Route exact path="/Elementos">
            <Elementos/>
          </Route>
        </Switch>    
      </BrowserRouter>
    </>
  );
}

export default App;

