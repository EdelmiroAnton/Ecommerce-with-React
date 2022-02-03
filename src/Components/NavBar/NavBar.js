import "./NavBar.scss"
import cart from "../../img/cart.svg"
import { Navbar, Container, Form, Offcanvas, Body, Nav, Button, NavDropdown, FormControl  } from "react-bootstrap"
import { Contador } from "../Contador/Contador"





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
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Promociones</Nav.Link>
          <Nav.Link href="#action2">Ver Carrito </Nav.Link>
          <NavDropdown title="Guitarras" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Electricas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Acusticas</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Criollas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Accesorios
            </NavDropdown.Item>
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
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
        <div className="carrito" >
        <img src={cart}/>
        <p className="parentesis" >(  )</p>
        </div>   
        </header>

        
    )

}