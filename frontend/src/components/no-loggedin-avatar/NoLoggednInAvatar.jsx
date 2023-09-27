import signInAvatar from '../../assets/singIn.svg';
import { Link } from 'react-router-dom';

function NoLoggedInAvatar () {
    return (
        <Link to='/user/login'><img src={signInAvatar} alt="sign in avatar"/></Link>
    );
}

export default NoLoggedInAvatar;
