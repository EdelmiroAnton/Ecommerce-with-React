import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../Firebase/config";
import { Footer } from "../Footer/Footer";
import { FormCheckOut } from "./FormCheckOut";

export const Checkout = () => {
  const { totalCart, cart, vaciarCart } = useContext(CartContext);
  const [values] = useState({
    nombre: "",
    apellido: "",
    tel: "",
    direccion: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const generarOrden = () => {
    const orden = {
      buyer: values,
      item: cart,
      total: totalCart(),
      fechayhora: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, orden).then((doc) => {
      setOrderId(doc.id);
      vaciarCart();
    });
  };

  // https://www.kindacode.com/article/live-email-validation-in-react-with-regex/

  const handleSubmit = (e) => {
    e.preventDefault();

    generarOrden();
  };

  // *** EMAIL VALIDATION *** //
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;

  const validarEmail = (e) => {
    const email = e.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Dirección correcta!");
    } else {
      setIsValid(false);
      setMessage("Ingresa un email válido");
    }
  };
  // *** EMAIL VALIDATION *** //

  // ***  NAME VALIDATION *** //
  const [isValidName, setIsValidName] = useState(false);
  const [messageName, setMessageName] = useState("");

  const validarNombre = (e) => {
    const name = e.target.value;
    if (name.length >= 3) {
      setIsValidName(true);
      setMessageName("Nombre Válido!");
    } else {
      setIsValidName(false);
      setMessageName("Ingrese un nombre mayor a 3 caracteres");
    }
  };

  // ***  NAME VALIDATION *** //

  if (orderId) {
    return (
      <div className="container">
        <h2>Tu orden de compra es: {orderId}</h2>
        <hr />
        <Link to="/" className="btn btn-outline-success">
          {" "}
          Seguir comprando!
        </Link>
      </div>
    );
  }

  // Control para que no me redireccione al checkout cuando no tenga productos en mi cart
  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <FormCheckOut
        handleSubmit={handleSubmit}
        validarEmail={validarEmail}
        validarNombre={validarNombre}
        isValid={isValid}
        message={message}
        isValidName={isValidName}
        messageName={messageName}
      />

      <Footer />
    </>
  );
};
