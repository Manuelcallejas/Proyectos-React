import  './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="head_navbar">

            <div className="cont_navbar">

                <img src='./img/logo.png' className='logo_nav' alt='logo'></img>

                <nav className="list_nav">
                    <p className="item_nav">MENU</p>
                    <p className="item_nav">INFO</p>
                    <p className="item_nav">STOCK</p>
                </nav>
                <CartWidget/>
            </div>

        </header>
    )

}