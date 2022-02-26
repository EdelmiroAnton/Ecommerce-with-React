import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {BsTrash} from "react-icons/bs"
import { Link } from "react-router-dom"


export const Cart = () =>{

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    if (cart.length === 0){
        return (

            <div className="cart-vacio">
                <p> Ups! Su carrito esta vacio! </p>
                <Link to="/" className="btn btn-secondary"> Volver a comprar </Link>
            </div>
        )
    } 

    return (

        <div className="container my-4">
            <h1 className="resumen-cart">Resumen de tu compra</h1>
            <hr/>
            {
                cart.map((item) => ( 
                    <div key={item.id} className="cart-view">

                        <div className="img-cart">
                            {/* aca va la img de la guitarra */}
                            <p>ACA VA LA IMG DE LA GUITARRA</p>
                            {item.img}
                        </div>

                        <div>
                            <p className="titulo">Guitarra {item.marca}</p>
                            <hr/>
                            <p className="detalle-cart">Modelo: {item.modelo}</p>
                            <hr/>
                        </div>

                        <div>
                            <p className="titulo">Precio unitario</p> 
                            <hr/>
                            <p className="detalle-cart">${item.precio}</p>
                            <hr/>
                        </div>

                        <div>
                            <p className="titulo">Cantidad seleccionada </p>
                            <hr/>
                            <p className="detalle-cart">{item.cantidad}</p>
                            <hr/>
                           
                        </div>

                        <button 
                            className="btn btn-danger eliminar-item"
                            onClick={() => eliminarItem(item.id)}
                            >
                            <BsTrash/>
                                                    
                            </button>
                        
                        
                        
                                               
                    </div>
                    
                ))   
            }


                     <div className="cart-total">
                            <p className="titulo">Total a Pagar (IVA incluido):</p>
                            <p className="precio-total"> ${totalCart()} </p>
        
                            <button 
                            className="btn btn-success"
                            // onClick
                            >Finaliza tu compra
                            </button>   


                    </div>

                        <button 
                            className="btn btn-danger vaciar-cart"
                            onClick={vaciarCart} 
                            >Vaciar Carrito
                        </button>   
        </div>
        
    )
}