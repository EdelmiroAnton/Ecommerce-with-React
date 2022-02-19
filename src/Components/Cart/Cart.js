import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {BsTrash} from "react-icons/bs"



export const Cart = () =>{

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    return (

        <div className="container my-4">
            <h1>Resumen de tu compra</h1>
            <hr/>

            {
                cart.map((item) => ( 
                    <div key={item.id}>
                        <h2>Guitarra {item.marca}</h2>
                        <p>Modelo: {item.modelo}</p>
                        <p>Precio unitario {item.precio}</p>
                        <p>Cantidad seleccionada: {item.cantidad}</p>
                        <button 
                        className="btn- btn-danger"
                        onClick={() => eliminarItem(item.id)}
                        >
                        <BsTrash/>
                        </button>
                        <hr />
                    </div>
                ))   
            }
                    <p>Total a Pagar (IVA incluido): {totalCart()}</p>
        
                    <button 
                    className="btn btn-danger"
                    onClick={vaciarCart} 
                     >Vaciar Carrito</button>    
        </div>
        
    )
}