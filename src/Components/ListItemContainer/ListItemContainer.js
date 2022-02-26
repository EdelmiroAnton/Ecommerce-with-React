import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemList } from "../ItemList/ItemList"
import "./ListItemContainer.scss"
import loader from "../../img/guitarras/loader.jpg"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/config"
import { collection, doc, getDocs, query, where } from "firebase/firestore"



export const ListItemContainer = ({ mensaje }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoria} = useParams()

       
    useEffect(() => {
                setLoading(true)

                // 1) Armar referencia
                const productosRef = collection(db, "productos")
                const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef
                // 2) Pedir referencia
                getDocs(q)
                    .then((res) => {
                        setProductos(res.docs.map((doc) => {
                            return {
                                id: doc.id,
                                ...doc.data()
                            }
                        }))
                    })
                    .finally(() => {
                        setLoading(false)
                    })
                // pedirDatos()
                //     .then((res) => {

                //         if (categoria) {
                //             setProductos(res.filter((el) => el.tipo === categoria))
                //         }else{
                //             setProductos(res)
                //         } 
                //     })
                //     .catch((err) => {
                //         console.log(err)
                //     })
                //     .finally(() => {
                //         console.log("Peticion finalizada")
                //         setLogading(false)
                //     })

                
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
