import { Footer } from "../Footer/Footer";
import { Article } from "./Article";
import "./itemDetail.scss";

export const ItemDetail = ({
  id,
  categoria,
  marca,
  modelo,
  precio,
  img,
  stock,
}) => {
  return (
    <>
      <Article
        img={img}
        stock={stock}
        categoria={categoria}
        id={id}
        modelo={modelo}
        precio={precio}
        marca={marca}
      />
      <Footer />
    </>
  );

  // <article className="article container-fluid">
  //     <div className="item-detail">
  //         <div>
  //             <img src={img} alt="" className="img-item-detail"/>
  //         </div>
  //         <div className="item-detail-text">
  //             <h2>Guitarra {categoria} {marca} {modelo}</h2>
  //             <br />
  //             <p className="itemDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis reprehenderit perferendis fugit eos officia delectus, sunt nam quasi modi consequatur tempore neque illum nemo, rerum quae obcaecati blanditiis deleniti illo? Temporibus molestias aperiam dolores unde! Corrupti laborum facere dolore quia, et, aspernatur tempore magnam officia tenetur hic eos ratione deserunt?</p>
  //             <br />
  //             <p>Precio: ${precio}</p>
  //             {
  //                 isInCart(id)
  //                 ?
  //                     <div className="botones-compra">
  //                         <Link to="/cart" className="fin-compra">
  //                         Genial! Click para terminar tu compra!
  //                         </Link>

  //                         <Link to="/" className="seguir-comprando">
  //                         <span className="txt-seguir-comprando"> Seguir comprando! </span>
  //                         </Link>
  //                     </div>
  //                 :
  //                 <div className="botones-item-detail">

  //                     <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>

  //                     <button
  //                     className="boton-agregar-carrito"
  //                     onClick={handleAddToCart}
  //                     >
  //                     Agregar al Carrito
  //                     </button>

  //                 </div>
  //             }

  //         </div>
  //     </div>

  // </article>
};
