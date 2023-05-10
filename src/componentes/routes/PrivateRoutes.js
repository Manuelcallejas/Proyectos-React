import { Navbar } from '../Navbar/Navbar';
import ItemListContainer from '../ItemListConteiner/ItemListConteiner';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';



const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={ <ItemListContainer /> }/>
                {/* <Route path='/' element={ <PokeApi /> }/> */}
                <Route path='/productos/:categoryId' element={ <ItemListContainer /> }/>
                <Route path='/detail/:itemId' element={ <ItemDetailContainer /> } />
                <Route path='/cart' element={ <Cart /> } />
                <Route path='/checkout' element={ <Checkout /> } />
                <Route path='*' element={ <Navigate to={"/"}/> }/>
            </Routes>
        </>
    )
}

export default PrivateRoutes