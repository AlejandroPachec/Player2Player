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

const LoginPage = () => {
    const { login } = useContext(UserAuthContext);
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    async function handleSubmit (event) {
        event.preventDefault();

        setError('');

        try {
            const userAuth = await loginUserService(formValues);
            login(userAuth);
            navigate('/');
        } catch (error) {
            setError(error.message);
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
                <img src={LogInImage} alt="Imagen" />
                <div className='login-form-container'>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <GeneralInput placeholder={'correo@ejemplo.com'} type={'email'} value={'email'} handleChange={handleChange} />
                        <Password value={'password'} handleChange={handleChange} placeholder={'Contraseña'} />
                        {
                            error ? <p>{error}</p> : null
                        }
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
