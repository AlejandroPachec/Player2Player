import Logo from '../../components/logo/Logo';
import NoLoggedInAvatar from '../../components/no-loggedin-avatar/NoLoggednInAvatar';
import SearchBar from './SearchBar';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext } from 'react';
import LoginAvatar from '../../components/logIn-avatar/LoginAvatar';

function HomePageHeader () {
    const { token } = useContext(UserAuthContext);
    return (
        <header>
            <Logo />
            <SearchBar />
            {
                token ? <LoginAvatar/> : <NoLoggedInAvatar />
            }
        </header>
    );
}

export default HomePageHeader;
