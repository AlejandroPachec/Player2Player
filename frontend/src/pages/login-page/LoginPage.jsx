import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import LogInImage from '../../assets/loginImg.webp';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import './loginPageStyles.css';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUserService } from '../../service';
import { UserAuthContext } from '../../context/UserAuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const { login } = useContext(UserAuthContext);
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        try {
            const userAuth = await loginUserService(formValues);
            login(userAuth);
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    }
    const handleChange = (event) => {
        const newFormValues = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValues
        });
    };

    return (
        <>
            <HeaderSecond />
            <main className='login-main'>
                <div className='login-image-container'>
                    <img src={LogInImage} alt="Imagen" className='login-image'/>
                </div>
                <div className='login-form-container'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <GeneralInput placeholder={'correo@ejemplo.com'} type={'email'} value={'email'} handleChange={handleChange} />
                        <Password value={'password'} handleChange={handleChange} placeholder={'Contraseña'} />
                        <MainButton text={'Iniciar sesión'}></MainButton>
                    </form>
                    <div className='no-account'>
                        <p>¿Todavía no tienes cuenta?</p>
                        <Link to='/user/create' >Regístrate</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;
