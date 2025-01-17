import { useState } from "react";

export const FormCheckOut = ({
  handleSubmit,
  validarEmail,
  isValid,
  message,
  validarNombre,
  isValidName,
  messageName,
}) => {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    tel: "",
    direccion: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-5">
      <h3 className="orden-de-compra"> Orden de compra </h3>

      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            className="form-control my-2"
            type="text"
            placeholder="Tu nombre"
            // value={values.nombre}
            onChange={validarNombre}
            name="nombre"
          />

          <div className={`message ${isValidName ? "success" : "error"}`}>
            {messageName}
          </div>
        </div>

        <input
          className="form-control my-2"
          type="text"
          placeholder="Tu apellido"
          value={values.apellido}
          onChange={handleInputChange}
          name="apellido"
        />

        <input
          className="form-control my-2"
          type="tel"
          placeholder="Tu teléfono"
          value={values.tel}
          onChange={handleInputChange}
          name="tel"
        />

        <input
          className="form-control my-2"
          type="direccion"
          placeholder="Tu dirección"
          value={values.direccion}
          onChange={handleInputChange}
          name="direccion"
        />

        <div className="inputEmail">
          <input
            className="form-control my-2 email"
            type="email"
            placeholder="Tu email"
            // value={values.email}
            onChange={validarEmail}
            name="email"
          />

          <div className={`message ${isValid ? "success" : "error"}`}>
            {message}
          </div>
        </div>

        <button type="submit" className="btn btn-primary enviar-form">
          Enviar
        </button>
      </form>
    </div>
  );
};
