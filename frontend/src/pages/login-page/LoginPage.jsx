import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import LogInImage from '../../assets/loginImg.webp';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
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
            <main>
                <img src={LogInImage} alt="Imagen" />
                <div>
                    <form>
                        <GeneralInput placeholder={'correo@ejemplo.com'} type={'email'} value={'email'} handleChange={handleChange}/>
                        <Password value={'pass'} handleChange={handleChange}/>
                        <MainButton text={'Iniciar sesión'}></MainButton>
                        <div>
                            <p>¿Todavía no tienes cuenta?</p>
                            <Link to='/user/create' >Regístrate</Link>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default LoginPage;
