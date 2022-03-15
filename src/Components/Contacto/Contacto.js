import { useState } from "react"
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Contacto = () => {

        const [value, setValue] = useState({
            nombreCompleto:"",
            telefono:"",
            email:""
        })

        const [isValid, setIsValid] = useState(false);
        const [message, setMessage] = useState('');
        const emailRegex = /\S+@\S+\.\S+/;
        const inputChange = (e) => {
            setValue({
                ...value,
                [e.target.name]: e.target.value
            })
        }

        const validarEmail = (e) =>{
            const email = e.target.value;
                if (emailRegex.test(email)) {
                    setIsValid(true);
                    setMessage('Dirección correcta!');
                } else {
                    setIsValid(false);
                    setMessage('Ingresa un email válido');
                }
            }

    return(
        <>
        <h1 className="texto-contacto">Contacto</h1>

        <form className="container my-5 formContacto">

            <input 
            type="text"
            className="form-control my-2"
            placeholder="Nombre completo"
            value={value.nombreCompleto}
            onChange={inputChange}
            name="nombreCompleto"
            />

            <input 
            type="text"
            className="form-control my-2"
            placeholder="Telefono"
            value={value.telefono}
            onChange={inputChange}
            name="telefono"
            />
        
            <input 
            type="email"
            className="form-control my-2 email"
            placeholder="mail"
            onChange={validarEmail}
            name="email"
            />

            <div className={`message ${isValid ? 'success' : 'error'}`}>
                {message}
            </div>

            <div className="textArea" >
                <textarea 
                cols="30" 
                rows="10" 
                placeholder="Deje su consulta aquí"> 
                </textarea>
            </div>
        
        </form>

            <div className="botonContacto">
                <button type="submit">
                    <span className="textoBoton">Enviar Consulta </span> 
                </button>
            </div>

            <Footer/>
        </>
    )
}