import { ListItemContainer } from "./Components/ListItemContainer/ListItemContainer";
import { NavBar } from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { Contacto } from "./Components/Contacto/Contacto";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import{ Cart } from "./Components/Cart/Cart";
import { Checkout } from "./Components/Checkout/Checkout";
import { Home } from "./Components/Home/home";
import { Footer } from "./Components/Footer/Footer";


function App() {
  
  return (
     
    <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
{/* El "path" te muestra la URL a la que queremos ir, y el atributo "element" muestra
              el componente que queremos que renderice */}

                  <Route path="/home" element={ <Home /> }  />
                  <Route path="/" element={ <ListItemContainer mensaje="Productos" /> }  /> 
                  <Route path="/guitarras/:categoria" element={ <ListItemContainer/>}  />
                  <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
                  <Route path="/Contacto" element={ <Contacto/> }  />
                  <Route path="/cart" element={ <Cart/> }  />
                  <Route path="/checkout" element={ <Checkout /> }/> 
                  <Route path="*" element={ <Navigate to="/" /> }/> 

                  
                  {/* El path "*" significa cualquier opcion distintas a las anteriores. Me va a llevar al inicio, x ejemplo  */}
                  {/* Hacer un path "*" de un ERROR 404 */}
            </Routes>
             
        </BrowserRouter>
    </CartProvider>
      
  );
}

export default App;
