import { Boton } from "../Boton/Boton"

import "./ItemCount.scss"


export const ItemCount = ( { max, min = 0, counter, setCounter } ) => {



    const handleSuma = () => {
        counter < max &&  setCounter(counter + 1)
    }

    const handleResta = () => {
        counter > min && setCounter(counter - 1) 
    }

    return (
        <>
        <div className='btnContador'>
            
            <button className="btn btn-primary" onClick={handleResta}> - </button>
            <span className="mx-3"> {counter} </span>
            <button className="btn btn-primary" onClick={handleSuma}> + </button>
            
        </div>
        </>
    )

}