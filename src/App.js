
import { Navbar } from './componentes/Navbar/Navbar';
import ItemListConteiner from './componentes/ItemListConteiner/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div>
    <Navbar/>
    <ItemListConteiner greeting={'bienvenido'} />

  </div>
  
  );
}

export default App;
