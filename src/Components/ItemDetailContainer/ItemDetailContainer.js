import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../../helpers/loader"
import { pedirDatos } from "../../helpers/pedirDatos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import "../../helpers/loader.scss"

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)

    const { itemId } = useParams()
    console.log(item)



        useEffect(() => {
            setLoading(true) 

            pedirDatos()
                .then((res) =>{
                    setItem(res.find((el) => el.id === Number(itemId)))


            })
            .finally(() => {
                setLoading(false)
            })
            
        }, [])

    return (
        <>
    <div>
            {
                loading 
                ? <Loader/>
                : <ItemDetail {...item}/>
            }
        
    </div>

        </>
    )
}