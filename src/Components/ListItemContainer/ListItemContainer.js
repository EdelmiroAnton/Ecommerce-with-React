import { useEffect, useState } from "react"
import { Loader } from "../../helpers/loader"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import "./ListItemContainer.scss"
import loader from "../../img/guitarras/loader.jpg"
import { useParams } from "react-router-dom"



export const ListItemContainer = ({ mensaje }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLogading] = useState(false)

    const {categoria } = useParams()

       
    useEffect(() => {
                setLogading(true)

                pedirDatos()
                    .then((res) => {

                        if (categoria) {
                            setProductos(res.filter((el) => el.tipo === categoria))
                        }else{
                            setProductos(res)
                        } 
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    .finally(() => {
                        console.log("Peticion finalizada")
                        setLogading(false)
                    })
    }, [categoria])

    return (

        <main>
            
            {
                loading ? 
                <img src={loader} className="loader"/>  
                : <ItemList productos={productos} mensaje={mensaje}/>
            }                                
                            
           
        </main>
            
        
        
      


    )


}
