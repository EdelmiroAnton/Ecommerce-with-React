import { BsTrash } from "react-icons/bs";

export const CartDetail = ({ cart, eliminarItem }) => {
  return cart.map((item) => (
    <div key={item.id} className="cart-view">
      <div>
        <p className="titulo">Guitarra {item.marca}</p>
        <hr />
        <p className="detalle-cart">Modelo: {item.modelo}</p>
        <hr />
      </div>

      <div>
        <p className="titulo">Precio unitario</p>
        <hr />
        <p className="detalle-cart">${item.precio}</p>
        <hr />
      </div>

      <div>
        <p className="titulo">Cantidad seleccionada </p>
        <hr />
        <p className="detalle-cart">{item.cantidad}</p>
        <hr />
      </div>

      <button
        className="btn btn-danger eliminar-item"
        onClick={() => eliminarItem(item.id)}
      >
        <BsTrash />
      </button>
    </div>
  ));
};
