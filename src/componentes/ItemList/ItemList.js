import Item from "../Item/Item"

const ItemList = ({ items }) => {
    return (
        <div>
            <h2 className="list_title">Bichitos</h2>
            <hr />
            
            <div className='row'>
                {items.map ((producto) => <Item key= {producto.id} item={producto} />)}         
            </div>
        </div>
    )
}
export default ItemList