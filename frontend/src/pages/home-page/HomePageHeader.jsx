import Logo from '../../components/logo/Logo';
import NoLoggedInAvatar from '../../components/no-loggedin-avatar/NoLoggednInAvatar';
import SearchBar from './SearchBar';

function HomePageHeader () {
    return (
        <header>
            <Logo />
            <SearchBar />
            <NoLoggedInAvatar />
        </header>
    );
}

export default HomePageHeader;
