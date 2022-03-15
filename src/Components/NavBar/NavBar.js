import "./NavBar.scss"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"
import logo from "../../img/logo.png"
import Navbar from 'react-bootstrap/Navbar'

export const NavBar = () =>{

    return (
        <header className="header"> 
  
            <Link to="/home" className="logoContainer">
               <img src={logo} className="logo" />     
            </Link>         

            <nav fixed="top" className="navBar">
                       
                    <ul className="enlaces"  >                      
                        <li className="navBar-enlace"> <Link to="/home"> Home </Link></li>
                        <li className="navBar-enlace guitarras"> 
                          <Link to="/"> Guitarras </Link> 
                            <ul className="nav-desplegable">
                              <li > <Link to="guitarras/electrica"> Electricas </Link> </li>
                              <li> <Link to="guitarras/acustica"> Acusticas </Link> </li>
                              <li> <Link to="guitarras/criolla"> Criollas </Link> </li>
                            </ul>
                        </li>
                        <li className="navBar-enlace"> <Link to="/contacto"> Contacto </Link> </li>
                    </ul>
            </nav>

              
        <div className="carrito" >
          <CartWidget/>
        </div>  

      </header>

        
    )

}