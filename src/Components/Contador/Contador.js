import { Boton } from "../Boton/Boton"
import { useState} from "react"
import "./contador.scss"


export const Contador = () => {

    const [botonSuma, setBotonSuma] = useState (0)
    const [loader, setLoader] = useState(true)

    const sumar = () => {
        setBotonSuma(botonSuma + 1);
        console.log(botonSuma)
    }

    return (
        <>
        <div className='btnContador'>
            <Boton click={sumar}></Boton>

            <p>  {botonSuma} </p>
        </div>
        </>
    )

}