import LogoImage from '../../assets/logo.webp';
import { Link } from 'react-router-dom';
import './logo.css';

function Logo () {
    return (
        <Link to='/'>
            <img src={LogoImage} alt="logo" id='logo'/>
        </Link>
    );
}

export default Logo;
