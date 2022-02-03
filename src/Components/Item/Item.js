import { Button, Card } from 'react-bootstrap';
import { Contador } from '../Contador/Contador';
import "./item.scss"

export const Item = ({ tipo, marca, color, precio, img, modelo }) => {

    return (
        
                    <Card>
                        <img className="img" src={img} width={"150px"} height={"150px"}/>
                            <Card.Body>
                                <Card.Title>Tipo: {tipo}</Card.Title>
                                <Card.Text>Marca: {marca}</Card.Text>
                                <Card.Text>Modelo: {modelo}</Card.Text>
                                <Card.Text>Color: {color}</Card.Text>
                                <Card.Text>Precio: AR$ {precio}</Card.Text>
                                <button className="learn-more">
                                    <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Ver Mas</span>
                                </button>
                                <Contador/>
                            </Card.Body>
                    </Card>
                
            
        
    )
}
