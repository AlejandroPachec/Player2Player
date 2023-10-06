import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { MessagesContextProvider } from './context/MessagesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <MessagesContextProvider>
        <UserAuthContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UserAuthContextProvider>
    </MessagesContextProvider>
);
