import { Link } from "react-router-dom";

export const CartTotal = ({ total }) => {
  return (
    <div className="cart-total">
      <p className="titulo">Total a Pagar (IVA incluido):</p>
      <p className="precio-total"> ${total} </p>

      <Link
        to="/checkout"
        className="finalizar-compra"
        // onClick
      >
        Finaliza tu compra
      </Link>
    </div>
  );
};
