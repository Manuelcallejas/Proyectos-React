import { useEffect, useState } from 'react'
import { pedirDatos } from '../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListConteiner.css'


const ItemListConteiner = () =>{
    const[productos, setProductos] = useState([])
    const[loading , setLoading] = useState(true)

    const {categoryId} = useParams ()
    
    useEffect(() => {
        setLoading(true)
        

        pedirDatos()
            .then((res) => {
                if(categoryId){
                    setProductos(res.filter((prod) => prod.categoria === categoryId))
                } else{
                    setProductos(res)
                }
                
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

        }, [] )
        

     
    return(
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando..</h2>
                    : <ItemList items={productos}/>
            }
            
        </div>
    )
    }

export default ItemListConteiner