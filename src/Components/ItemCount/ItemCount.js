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
            
            <button className="boton-resta" onClick={handleResta}> <span className="signo-resta"> - </span> </button>
                <span className="mx-3"> {counter} </span>
            <button className="boton-suma" onClick={handleSuma}> <span className="signo-suma"> + </span>  </button>
            
        </div>
        </>
    )

}