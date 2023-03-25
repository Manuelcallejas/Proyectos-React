
import { Navbar } from './componentes/Navbar/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeApi from './PokeApi/PokeApi';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      
        <Navbar />

        <Routes>
          <Route path='/' element={<ItemListConteiner/>}  ></Route>
          <Route path='/productos/:categoriaId' element={<ItemListConteiner/>}></Route>
          <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }></Route>
          <Route path='/PokeApi' element={<PokeApi/>}></Route>
          <Route path='*' element={<Navigate to={"/"}/>} ></Route>
        </Routes>
     
    </BrowserRouter>
      


  );
}

export default App;
