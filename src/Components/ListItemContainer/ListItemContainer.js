import { useEffect, useState } from "react"
import { Loader } from "../../helpers/loader"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import "./ListItemContainer.scss"
import loader from "../../img/guitarras/loader.jpg"


export const ListItemContainer = ({ mensaje }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLogading] = useState(false)

    
    useEffect(() => {
               
                setLogading(true)

                pedirDatos()
                    .then((res) => {
                        setProductos(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                    .finally(() => {
                        console.log("Peticion finalizada")
                        setLogading(false)
                        
                    })

    }, [])



    return (

        <main>
            
            {
                loading ? <img src={loader} className="loader"/>  : <ItemList productos={productos} mensaje={mensaje}/>
            }                                                
           
        </main>
            
        
        
      


    )


}
