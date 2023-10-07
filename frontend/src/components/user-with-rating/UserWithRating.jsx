import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultAvatar from '../../assets/defaultAvatar.webp';

const UserWithRating = ({ username, lastName, avatar, idUser }) => {
    return (
        <Link to={`/user/profile/${idUser}`}>
            <div>
                {
                    avatar
                        ? <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${avatar}`} alt="Foto de perfil" />
                        : <img src={defaultAvatar} alt='Avatar por defecto'/>
                }
                <p>{username} {lastName}</p>
            </div>
        </Link>
    );
};

UserWithRating.propTypes = {
    username: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string,
    idUser: PropTypes.string
};

export default UserWithRating;
