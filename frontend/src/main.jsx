import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { UserAuthContextProvider } from './context/UserAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserAuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </UserAuthContextProvider>
);
