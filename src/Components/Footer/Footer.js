import {BsWhatsapp, BsEnvelope} from "react-icons/bs"

export const Footer = () => {
    return (

        <div className="fluid-container footer">

            <div className="textosFooter">
                <p className="emailFooter"><BsEnvelope/> hola@guitarjs.com</p>
                <p className="textFooter">GUITAR JS - TODOS LOS DERECHOS RESERVADOS</p>
                <p className="telFooter"> <BsWhatsapp/> +54-9-02324-15975624</p>
            </div>
        </div>
    )
}
    