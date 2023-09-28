import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext } from 'react';
import defaultAvatar from '../../assets/defaultAvatar.webp';

const LoginAvatar = () => {
    const { user } = useContext(UserAuthContext);

    return (
        <div>
            <p>{user.first_name} {user.last_name[0]}.</p>
            {
                user.avatar
                    ? <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${user.avatar}`} alt="Foto de perfil" />
                    : <img src={defaultAvatar} alt='Avatar por defecto'/>
            }

        </div>
    );
};

export default LoginAvatar;
