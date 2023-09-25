import LoggedInAvatar from '../loggedInAvatar/LoggedInAvatar';
import Logo from '../logo/Logo';
import './headerLoggedIn.css';

const HeaderLoggedIn = () => {
    return (
        <header className='headerLoggedIn'>
            <Logo/>
            <LoggedInAvatar/>
        </header>
    );
};

export default HeaderLoggedIn;
