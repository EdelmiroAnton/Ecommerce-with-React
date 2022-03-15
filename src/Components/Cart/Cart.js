import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartDetail } from "./CartDetail"
import { CartTotal } from "./CartTotal"
import { BtnVaciarCart } from "./BtnVaciarCart"
import { CartVacio } from "./CartVacio"
import { Footer } from "../Footer/Footer"

export const Cart = () =>{

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    if (cart.length === 0){
        return ( 
                <CartVacio/>
        )
    } 

    return (
        <>
            <div className="container my-4">
                <h1 className="resumen-cart">Resumen de tu compra</h1>
                <hr/>
                
                    <CartDetail cart={cart} eliminarItem={eliminarItem}/>                
                    <CartTotal total={totalCart()}/>
                    <BtnVaciarCart vaciarCart={vaciarCart}/>

            </div>
            <Footer/>
        </>
    )
}