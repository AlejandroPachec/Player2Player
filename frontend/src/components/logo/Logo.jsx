import LogoImage from '../../assets/logo.webp';
import { Link } from 'react-router-dom';

function Logo () {
    return (
        <Link to='/'>
            <img src={LogoImage} alt="logo" />
        </Link>
    );
}

export default Logo;
