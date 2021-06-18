import React from "react";

export default function User({match:{params:{codigo}}}){
    return (<h2>{codigo}</h2>)
}

/*import { Button } from "bootstrap";
import React, {Component} from "react";
//import BotonComponente from "./BotonComponente"
//import React  from "react";
//class PrimerComponente extends React.Component{
//} 
//<BotonComponente  mensaje={{hola:"boton rojo"}}/>
//<BotonComponente  mensaje={"boton azul"}/>
//<BotonComponente  mensaje={"boton verde"}/>
class PrimerComponente extends Component{
    state ={
        listPokemon : [],
        load : true,
        mensaje: "sumar"
    }

    componentDidMount(){
        const result = async () =>{
            const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5%offset=1");
            const json = await result.json();
                        this.setState({
                listPokemon: json.results,
                load: false,
            });
        }
        result();
    }

    componentDidUpdate(prevProps, prevState ){
        if(prevState.load !== this.state.load){
            console.log("cambio el estado load")
        }
    }

    componentWillUnmount(){
        console.log("Se desmonto")
    }

    render(){
        return(
            <div>
                {this.state.load ? (
                        <h2>cargando...</h2>
                    ) : (
                <ul>
                    {
                        this.state.listPokemon.map((item,index)=>{
                            return <li key = {index}>{item.name}</li>;                            
                        })}
                </ul>                
                    )}    
                    <button>mas pokemon</button>            
            </div>
        ) 
    }
}*/


//mensaje como objeto <BotonComponente  mensaje={{hola:"boton rojo"}}/>
// <BotonComponente  mensaje={this.state.mensaje}/>
//instalar bootstrap, materialize, material-ui(especial para react), tailwind, 
//export default PrimerComponente;