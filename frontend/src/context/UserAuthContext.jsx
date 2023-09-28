import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }, [token, user]);

    const logout = () => {
        setToken('');
        setUser(null);
    };

    const login = (userAuth) => {
        console.log(token);
        setToken(userAuth[0]);
        setUser(userAuth[1]);
    };
    return (
        <UserAuthContext.Provider value={{ token, user, login, logout }}>
            {children}
        </UserAuthContext.Provider>
    );
};

UserAuthContextProvider.propTypes = {
    children: PropTypes.element.isRequired
};


export { UserAuthContext, UserAuthContextProvider };
