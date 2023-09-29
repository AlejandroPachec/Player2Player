import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserWithRating = ({ username, lastName, avatar, idUser }) => {
    return (
        <Link to={`/user/profile/${idUser}`}>
            <div>
                {
                    avatar ? <img src={avatar} alt="Foto de perfil" /> : null
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
