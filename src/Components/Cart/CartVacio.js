import { Link } from "react-router-dom";

export const CartVacio = () => {
  return (
    <div className="cart-vacio container my-5">
      <p> Ups! Su carrito esta vacio! </p>
      <Link to="/" className="btn btn-secondary">
        {" "}
        Volver a comprar{" "}
      </Link>
    </div>
  );
};
