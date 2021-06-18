import React, { useEffect, useState } from "react"

export default function PrimerHook(){
    const [listPokemon, setListPokemon] = useState([]);
    const [load, setLoad] = useState(true);
    const [limit, setLimit] = useState(1);
    const changeLimit = () => {
        setLimit(limit + 1)
    }

    useEffect(()=>{
        const result = async () =>{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=1`);
            const json = await result.json();
            setListPokemon(json.results);
            setLoad(false);
        };
        result();
    },[limit]);

    useEffect(()=>{
        return () => console.log("i am unmoounting");
    },[])

    return (
        <div className = "row">
            <div className = "col-12">
            {load ?(
                        <h2>cargando...</h2>
                    ) : (
                <ul>
                    {
                        listPokemon.map((item,index)=>{
                            return <li key = {index}>{item.name}</li>;                            
                        })}
                </ul>
                    )}
                    <button onClick = {changeLimit}>mas</button>
            </div> 
        </div>  
        ); 
}

//<button onClick={changeAlert}>Mostrar alerta</button>
//<button onClick={()=>setAlerta(true)}>Mostrar alerta</button>


//primera forma
//export default function PrimerHook(){
//    return <h4>Mi primer hook</h4>
//}


//segunda forma
//const PrimerHook = () =>{
//    return <h4>Mi primer hook</h4>
//}
//export default PrimerHook;

//tercera forma
//export default () =>{
//    return <h4>Mi primer hook</h4>
//}
