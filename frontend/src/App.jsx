import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';

function App () {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/user/login' element={<LoginPage/>} />
            {/* <Route path='/user/create' element={RegisterPage} />
            <Route path='*' element={NotFound} /> */}
        </Routes>
    );
}

export default App;
