export const BtnVaciarCart = ({vaciarCart}) =>{

    return <button 
                className="btn btn-danger vaciar-cart"
                onClick={vaciarCart} 
                >Vaciar Carrito
            </button>  
}