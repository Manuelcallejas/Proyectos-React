import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './componentes/context/CartContext';
import { LoginProvider } from './componentes/context/LoginContext';
import AppRouter from './componentes/routes/AppRouter';

function App() {


  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;

