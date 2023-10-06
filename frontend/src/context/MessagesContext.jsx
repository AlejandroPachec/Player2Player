import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const MessagesContext = createContext();

const MessagesContextProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    return (
        <MessagesContext.Provider value={{ message, setMessage }}>
            {children}
        </MessagesContext.Provider>
    );
};

MessagesContextProvider.propTypes = {
    children: PropTypes.element.isRequired
};


export { MessagesContext, MessagesContextProvider };
