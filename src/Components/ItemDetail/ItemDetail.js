import { Contador } from "../Contador/Contador"
import "./itemDetail.scss"

        

    
    export const ItemDetail = ({ id, tipo, marca, modelo, color, precio, img }) => {
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
                        <Contador/>
                    </div>
                </div>

            </article>

        )
    }