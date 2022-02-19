import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import "./itemDetail.scss"
 


export const ItemDetail = ({ id, tipo, marca, modelo, color, precio, img, stock }) => {

        const [cantidad, setCantidad] = useState(0)

        const { cart, addToCart, isInCart } = useContext(CartContext)

        console.log(cart)

        const handleAddToCart = () => {

            if (cantidad === 0) return alert("No hay productos agregados")

            if (!isInCart(id)) {
                const addItem = {
                    id, marca, modelo, stock, precio, cantidad
                }
                addToCart(addItem)
            }

        }

        return (
            <article>
                <div className="item-detail">
                    <div>
                        <img src={img} alt="" className="img-item-detail"/>
                    </div>
                    {/* <div className="display-flex"> */}
                    <div className="item-detail-text">
                        <h2>Guitarra {tipo}</h2>
                        <h3>Marca: {marca}</h3>
                        <h3>Modelo: {modelo}</h3>
                        <h3>Color: {color}</h3>
                        <p>Precio: ${precio}</p> 
                        <p className="itemDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit perferendis fugit eos officia delectus, sunt nam quasi modi consequatur tempore neque illum nemo, rerum quae obcaecati blanditiis deleniti illo? Temporibus molestias aperiam dolores unde! Corrupti laborum facere dolore quia, et, aspernatur tempore magnam officia tenetur hic eos ratione deserunt?</p>
                        
                        {
                            isInCart(id) 
                            ?   <Link to="/cart" className="btn btn-outline-danger">
                                 Genial! Click para terminar tu compra! 
                                </Link>
                            :
                            <>
                                <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>
                                
                            <button className="btn btn-outline-success my-3" onClick={handleAddToCart}> 
                            Agregar al Carrito
                            </button>

                            </>
                        }






                    
                    </div>
                </div>

            </article>

        )
    }