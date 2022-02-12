import "./Boton.scss"


export const Boton = ({click}) =>{

    return(   

        <button className="boton" onClick={click}> 
            <span className="addToCart">Add to Cart</span> 
        </button>                               
            

    )



}