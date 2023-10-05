import signInAvatar from '../../assets/singIn.svg';
import { Link } from 'react-router-dom';
import './noLoggedIn.css';

function NoLoggedInAvatar () {
    return (
        <Link to='/user/login'><img src={signInAvatar} alt="sign in avatar" className='default-avatar'/></Link>
    );
}

export default NoLoggedInAvatar;
