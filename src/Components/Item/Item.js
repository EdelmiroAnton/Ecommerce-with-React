import { Button, Card } from 'react-bootstrap';
import { Contador } from '../ItemCount/ItemCount';
import {Link} from "react-router-dom"
import "./item.scss"

export const Item = ({ id, tipo, marca, color, precio, img, modelo}) => {

    return (
        
                    <Card>
                        <img className="img" src={img} width={"150px"} height={"150px"} className="imgItem"/>
                            <Card.Body>
                                <Card.Title>Tipo: {tipo}</Card.Title>
                                <Card.Text>Marca: {marca}</Card.Text>
                                <Card.Text>Modelo: {modelo}</Card.Text>
                                <Card.Text>Color: {color}</Card.Text>
                                <Card.Text>Precio: AR$ {precio}</Card.Text>
                                
                                <Link to={`/detail/${id}`}>
                                    <button className="learn-more">
                                        <span className="circle" aria-hidden="true">
                                        <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Ver Mas</span>
                                    </button>
                                </Link>                         
                                     
                            </Card.Body>
                    </Card>
                
            
        
    )
}
