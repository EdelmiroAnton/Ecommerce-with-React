import { ListItemContainer } from "./Components/ListItemContainer/ListItemContainer";
import { NavBar } from "./Components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'



function App() {

  return (
    <>
      <NavBar/>
      <ListItemContainer mensaje="Productos"/>
 
    </>
  );
}

export default App;
