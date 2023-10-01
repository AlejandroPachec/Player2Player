import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext, useState } from 'react';
import defaultAvatar from '../../assets/defaultAvatar.webp';
import { Link } from 'react-router-dom';
import './styles.css';

const LoginAvatar = () => {
    const { user } = useContext(UserAuthContext);
    const [navigate, setNavigate] = useState(null);
    const open = Boolean(navigate);
    const handleClick = (event) => {
        setNavigate(event.currentTarget);
    };
    const handleClose = () => {
        setNavigate(null);
    };

    return (
        <>
            <div>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <div>
                        <p>{user.first_name} {user.last_name[0]}.</p>
                    </div>
                    {
                        user.avatar
                            ? <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${user.avatar}`} alt="Foto de perfil" />
                            : <img src={defaultAvatar} alt='Avatar por defecto'/>
                    }
                </Button>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button'
                    }}
                    anchorEl={navigate}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <Link to={'/product/addProduct'}>
                        <MenuItem onClick={handleClose}>Añadir producto</MenuItem>
                    </Link>
                    <Link to={'/user/edit'}>
                        <MenuItem onClick={handleClose}>Editar perfil</MenuItem>
                    </Link>
                    <Link to={`/user/orders/${user.id}`}>
                        <MenuItem onClick={handleClose}>Gestión de ventas</MenuItem>
                    </Link>
                    <MenuItem onClick={handleClose}>Ver pedidos</MenuItem>
                    <MenuItem onClick={handleClose}>Añadir valoración</MenuItem>
                    <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
                </Menu>
            </div>

        </>
    );
};

export default LoginAvatar;
