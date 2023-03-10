import{ FaCartPlus} from 'react-icons/fa'
import './CartWidget.css'

const CartWidget = () => {
    return(
        <div className='card_kart'>
            <FaCartPlus className='kart'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget