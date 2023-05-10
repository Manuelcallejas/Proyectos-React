import './Navbar.css'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

export const Navbar = () => {
    return (
        <header className="head_navbar">

            <div className="cont_navbar">

                <img src='./img/logo.png' className='logo_nav' alt='logo'></img>

                <nav className="list_nav">
                    <Link to="/"  className="item_nav">MENU</Link>
                    <Link to="/" className="item_nav">INFO</Link>
                    
                </nav>
                <CartWidget/>
            </div>

        </header>
    )

}