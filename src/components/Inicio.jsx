import './Inicio.css'
import React from 'react'

const Inicio = () => {    
    return (
        <div className='InicioContenedor'>
            <video src ='/videos/Pokemon.mp4' autoPlay loop muted/>        
            <img  src = '/imagenes/LogoPokemon.png' alt='LogoPokemon'/>
        </div>
    )
    
}

export default Inicio;

