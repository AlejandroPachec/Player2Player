import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext } from 'react';
import Logo from '../logo/Logo';
import LoginAvatar from '../logIn-avatar/LoginAvatar';
import NoLoggedInAvatar from '../no-loggedin-avatar/NoLoggednInAvatar';

const MainHeader = () => {
    const { token } = useContext(UserAuthContext);
    return (
        <header>
            <Logo/>
            {
                token ? <LoginAvatar/> : <NoLoggedInAvatar/>
            }
        </header>
    );
};

export default MainHeader;