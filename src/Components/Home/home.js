import { Link } from "react-router-dom" 
import  { Carousell }  from "../Carousel/Carousell"
import { Footer } from "../Footer/Footer"


export const Home = () => {
    return (
        <>
            <div className="container my-5">
                
                <h2 className="bienvenida">BIENVENIDOS A GUITAR JS</h2>

                    <Carousell/>
                    <Link to="/productos"> 
                        <span 
                            className="ver-productos">
                            Ver productos 
                        </span>  
                    </Link>

            </div>

            <Footer/>
        </>
    )
}