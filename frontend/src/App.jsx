import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import SearchPage from './pages/search-page/SeacrhPage';

function App () {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/:params' element={<SearchPage/>}/>
            <Route path='/user/login' element={<LoginPage/>} />
            {/* <Route path='/user/create' element={RegisterPage} />
            <Route path='*' element={NotFound} /> */}
        </Routes>
    );
}

export default App;
