import { Link } from "react-router-dom"
import {BsCartCheck, BsBraces} from "react-icons/bs"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const CartWidget = () => {
    
    const {cantidadCart} = useContext(CartContext)

    return(
         
    <Link to="/cart" className="cart-widget">
        
        
            <BsCartCheck/>
            <span className="cantidad-cart"> {cantidadCart()} </span>
       

    </Link>

    )
}