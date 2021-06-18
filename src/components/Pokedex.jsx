import React, {useEffect, useState} from "react"

const Pokedex = ({nombreNumero}) => {  
    const [listPokemon, setListPokemon] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
        const result = async () =>{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon${nombreNumero}`);
            const json = await result.json();
            setListPokemon(json.results);
            setLoad(false);
        };
        result();
    },[nombreNumero]);

    

    return (
<div className = "row">
            <div className = "col-12">
            {load ?(
                        <h2>cargando...</h2>
                    ) : (
                        
                        <ul>
                            {
                                listPokemon.map((item, index)=>{
                                    return <li key = {index}>{item.name}</li>;                            
                                })}
                        </ul>
                    )}
            </div> 
        </div> 
    );
}

export default Pokedex;

