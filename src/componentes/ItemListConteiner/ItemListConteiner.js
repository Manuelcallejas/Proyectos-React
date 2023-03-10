import './ItemListConteiner.css'
const ItemListConteiner = ({greeting}) =>{
    return(
        <div className="container my-5">
            <h2 className="list_title">ItemListConteiner</h2>
            <hr/>
            <p>{greeting}</p>

            <button className='btn btn-primary'>saludar</button>
        </div>
    )
}

export default ItemListConteiner