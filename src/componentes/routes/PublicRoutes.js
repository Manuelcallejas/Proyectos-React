import LoginScreen from '../LoginScreen/LoginScreen';
import { Routes, Route, Navigate } from 'react-router-dom';
import RegisterScreen from '../RegisterScreen/RegisterScreen';

const PublicRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={ <LoginScreen /> }/>
            <Route path='/register' element={ <RegisterScreen /> }/>
            <Route path='*' element={ <Navigate to={"/login"}/> }/>
        </Routes>
    )
}

export default PublicRoutes