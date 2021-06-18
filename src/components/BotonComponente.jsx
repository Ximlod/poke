import React, {Component, Fragment} from "react";

class BotonComponente extends Component{
    
        //this.props.mensaje.map(()=>console.log(1));
        //Const {hola} = this.props.mensaje;
    state = {
        contador: 0,
        mensaje: "Hola",
    }

    sumar = ()=>{
        this.setState({
            contador : this.state.contador + 1,
        })
    }

    reiniciar = ()=>{
        this.setState({
            contador : 0,
        })
    }

    despedida = ()=>{
        this.setState({
            mensaje : "Adios",
        })
    }

    render(){
        return(
            <Fragment>
            <div className= "Div padre">
                {this.state.contador === 10 ? (<h5>Alerta llego a 10</h5>) : (<h5>No a llegado a 10</h5>)}         
                <h1>{this.state.contador}</h1>
                <button onClick={this.sumar}>{this.props.mensaje.hola}</button>
                <button onClick={this.reiniciar}>Reiniciar</button>
                <button onClick={this.despedida}>Cambiar mensaje</button>
            </div>
            
            </Fragment>
        ) 
    }
}
//{this.state.contador === 10 ? (<h5>Alerta llego a 10</h5>) : (<h5>No a llegado a 10</h5>)}    if y else
//{this.state.contador === 10 && (<h5>Alerta llego a 10</h5>)}   if sin el else
//<Fragment></Fragmento> o <></>
export default BotonComponente;