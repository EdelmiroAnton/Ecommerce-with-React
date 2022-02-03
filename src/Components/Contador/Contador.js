import { Boton } from "../Boton/Boton"
import { useState} from "react"



export const Contador = () => {

    const [botonSuma, setBotonSuma] = useState (0)
    const [loader, setLoader] = useState(true)

    const sumar = () => {
        setBotonSuma(botonSuma + 1);
        console.log(botonSuma)
    }

    return (
        <>

        <Boton click={sumar}></Boton>

        <p>  {botonSuma} </p>
        
        </>
    )

}