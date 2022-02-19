import "./NavBar.scss"
import cart from "../../img/cart.svg"
import { Navbar, Container, Form, Offcanvas, Body, Nav, Button, NavDropdown, FormControl  } from "react-bootstrap"
import { Itemcount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"




export const NavBar = () =>{

    return (
        <header className="header"> 

               {/* <h1 className="logo"> ACA VA UN LOGO</h1>              

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
            </nav> */}

            <Navbar expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Menú</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Guitar JS</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/" className="nav-link"> Home </Link>
          {/* <Link to="/productos" className="nav-link"> Productos </Link> */}
          <Link to="/carrito" className="nav-link"> Ver Carrito </Link>
          <NavDropdown title="Guitarras" id="offcanvasNavbarDropdown">
            <Link to="guitarras/Electrica" className="nav-item"> Eléctricas </Link>
            <Link to="guitarras/Acustica" className="nav-item"> Acústicas </Link>
            <Link to="guitarras/Criolla" className="nav-item"> Criollas </Link>
            <NavDropdown.Divider />
            <Link to="/accesorios" className="nav-item">
              Accesorios
            </Link>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Encontrá tu guitarra"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
        <Link to="/contacto" className="nav-link"> Contacto </Link>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        <div className="carrito" >
        <CartWidget/>
        </div>   
        </header>

        
    )

}