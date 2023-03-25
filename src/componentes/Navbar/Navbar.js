import  './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="head_navbar">

            <div className="cont_navbar">

                <img src='./img/logo.png' className='logo_nav' alt='logo'></img>

                <nav className="list_nav">
                    <Link to="/"  className="item_nav">MENU</Link>
                    <Link to="/" className="item_nav">INFO</Link>
                    <Link to="/PokeApi" className="item_nav">POKEMON</Link>
                </nav>
                <CartWidget/>
            </div>

        </header>
    )

}