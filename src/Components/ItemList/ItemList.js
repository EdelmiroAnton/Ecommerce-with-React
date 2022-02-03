import { Item } from "../Item/Item"
import './ItemList.scss'

export const ItemList = ( {productos, mensaje} ) => {

    
    return (
        
        <div className="row tarjetas justify-content-md-center">
            <h1 className="mensaje">{mensaje}</h1>  
            {productos.map((el) => <Item key={el.ID} {...el}/>
                )}
            
        </div>
        
        
                                
        )
}


//Tambien se pueden listar las props asi (en lugar de ...el) :
            // tipo={el.tipo} 
            // marca={el.marca} 
            // modelo={el.modelo}
            // color={el.color} 
            // precio={el.precio} 
            // img={el.img}