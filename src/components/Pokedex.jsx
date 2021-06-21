import React, {useEffect, useState} from "react"
import './Pokedex.css';


const Pokedex = ({nombreNumero}) => {  
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [listPokemon, setListPokemon] = useState([]);
    const [load, setLoad] = useState(true);
    const [simple, setSimple] = useState(false);

    useEffect(()=>{        
        if (nombreNumero === ''){
            nombreNumero = '?limit=12&offset=0'
            fetchVariosPokemones(nombreNumero); 
            setSimple(false);
        }else{
            nombreNumero = `/${nombreNumero}`
            fetchUnPokemon(nombreNumero);
            setSimple(true);
        }
    },[nombreNumero]);


    const fetchVariosPokemones = async (nombreNumero) =>{
        const resultPokemones= await fetch(`https://pokeapi.co/api/v2/pokemon${nombreNumero}`);
        const jsonPokemones = await resultPokemones.json();
        if(jsonPokemones){
            setPokemons(jsonPokemones.results);
            pokemons.map( async (pokemon) => {
                const resultPokemon = await fetch(pokemon.url);
                const jsonPokemon = await resultPokemon.json();
                if(jsonPokemon){
                    var temp = pokemonDetails;
                    temp.push(jsonPokemon);
                    setPokemonDetails(temp);
                }
            })
        }
        setLoad(false);
    };

    const fetchUnPokemon = async (nombreNumero) =>{
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon${nombreNumero}`);
        const json = await result.json();
        setListPokemon(json.forms);
        setLoad(false) ;      
    };


    
    return (
        <>        
            {load ?(
                <h2>cargando...</h2>
            ) : (     
                simple ? (
                    <div>
                        <div>
                            { listPokemon.map((item)=>{ return <div>{item.name}</div>;}) }
                        </div>  
                    </div>                         
                ) : (
                    <div className="container principal">
                        <div className="row">
                        { pokemonDetails.map((pokemon)=>{                                         
                            return  <div className="container-card col-md-4">
                                        <div className="card borderless-card">
                                            <div className="profile-card">                                                                                                          
                                                <div className="card-block">
                                                    <h3>{pokemon.name}</h3>                                                    
                                                    <br/>
                                                    <img src ={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} height={200} width={200}></img>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>     
                                                    <br/>       
                                                    <br/>                           
                                                </div>
                                            </div>
                                            <div className="card-footer bg-inverse">
                                                <div className="row text-center">
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[0].base_stat}</h4>
                                                        <span>HP</span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[1].base_stat}</h4>
                                                        <span>ATTACK</span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[2].base_stat}</h4>
                                                        <span>DEFENSE</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer bg-inverse">
                                                <div className="row text-center">
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[3].base_stat}</h4>
                                                        <span>SPECIAL ATTACK</span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[4].base_stat}</h4>
                                                        <span>SPECIAL DEFENSE</span>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <h4>{pokemon.stats[5].base_stat}</h4>
                                                        <span>SPEED</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                        })}
                        </div>    
                    </div>                         
                )   
            )}
        </>
    );
}

export default Pokedex;