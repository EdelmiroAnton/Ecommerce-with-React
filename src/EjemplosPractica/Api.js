import { useEffect, useState } from "react"
import { Loader } from "../helpers/loader"

export const Api = () => {
    
    const [pokemon, setPokemon] = useState(null)
    const[id, setId] = useState(1) 
    
    const handlerSiguiente = () => {
        setId(id + 1)
    }

    const handlerAnterior = () => {
         id > 1 && setId(id - 1)  
    }

    
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then( (res) =>  res.json() )
            .then( (data) => {
                setPokemon(data)  //aca dentro decido que hacer cuando ya se resolvió el .then anterior
            })
    }, [id])


        return (
            <main>
                <div>

                {/* aca se usa el condicional "?" sobre el objeto. 
                Lo que dice es, "si existe el objeto, entonces accedo a la propiedad name, sino tira null.
                 */}
                <h3>{pokemon?.name}</h3>  
                
                {/* Tambien se podria usar un ternario */}

                {pokemon ?
                <img src={pokemon.sprites.front_shiny} alt="" />
                              
                : <p><Loader/></p>
                
            } 
                </div>

                <button 
                onClick={(handlerAnterior)} 
                className="btn btn-outline-success mx-3"
                disabled={id===1}
                >Anterior
                </button>
                <button onClick={(handlerSiguiente)}  className="btn btn-success outline">Siguiente</button>

            </main>
        )
    }