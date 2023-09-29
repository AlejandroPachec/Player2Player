import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import SearchPage from './pages/search-page/SeacrhPage';
import RegisterPage from './pages/register-page/RegisterPage';
import NotFoundPage from './pages/notFound-page/NotFoundPage';
import ProductPage from './pages/product-page/ProductPage';

function App () {
    return (
        <Routes>
            <Route path='/product/:idProduct' element={<ProductPage/>}/>
            <Route path='/user/login' element={<LoginPage/>} />
            <Route path='/user/create' element={<RegisterPage/>} />
            <Route path='/:params' element={<SearchPage/>}/>
            <Route path='/' element={<HomePage/>} />
            <Route path='*' element={<NotFoundPage/>} />
        </Routes>
    );
}

export default App;
