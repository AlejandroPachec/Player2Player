import PropTypes from 'prop-types';

const UserWithRating = ({ username, lastName, avatar }) => {
    return (
        <div>
            <img src={avatar} alt="Foto de perfil" />
            <p>{username} {lastName}</p>
        </div>
    );
};

UserWithRating.propTypes = {
    username: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string
};

export default UserWithRating;
