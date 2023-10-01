import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import SearchPage from './pages/search-page/SeacrhPage';
import RegisterPage from './pages/register-page/RegisterPage';
import NotFoundPage from './pages/notFound-page/NotFoundPage';
import ProductPage from './pages/product-page/ProductPage';
import UserProfilePage from './pages/userProfile-page/UserProfilePage';
import AddProductPage from './pages/addProduct-page/AddProductPage';
import OrderManagementPage from './pages/orderManagement-page/OrderManagementPage';
import EditUserPage from './pages/editUser-page/EditUserPage';

function App () {
    return (
        <Routes>
            <Route path='/product/addProduct' element={<AddProductPage/>} />
            <Route path='/user/edit' element={<EditUserPage/>} />
            <Route path='/user/orders/:sellerUser' element={<OrderManagementPage/>} />
            <Route path='/user/profile/:idUser' element={<UserProfilePage/>}/>
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
