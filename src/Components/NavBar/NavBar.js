import "./NavBar.css"
import cart from "../../img/cart.svg"



export const NavBar = () =>{

    return (
        <header className="header">    
               <h1 className="logo"> ACA VA UN LOGO</h1>              

            <nav className="navBar">
                
                    <div className="enlaces">
                        <p className="navBar-enlace">Home</p>
                        <p className="navBar-enlace">Productos</p>
                        <p className="navBar-enlace">Contacto</p>
                        <p className="navBar-enlace">Enlace 4</p>
                    </div>

                    <div className="cart">

                    <img src={cart}/>
                    </div>
            </nav>
        </header>



    )

}