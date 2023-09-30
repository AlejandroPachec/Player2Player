import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState } from 'react';
import { registerUserService } from '../../service';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        pass2: ''
    });

    const [error, setError] = useState('');

    function handleChange (event) {
        const newFormValues = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValues
        });
    }

    async function handleSubmit (event) {
        event.preventDefault();

        setError('');

        if (formValues.password !== formValues.pass2) {
            setError('Los campos de contraseña no coinciden');
        }

        try {
            await registerUserService(formValues);
            setTimeout(() => {
                navigate('/user/login');
            }, 3000);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>
            <HeaderSecond/>
            <main>
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <GeneralInput type={'text'} value={'firstName'} placeholder={'Nombre'} handleChange={handleChange}/>
                    <GeneralInput type={'text'} value={'lastName'} placeholder={'Primer apellido'} handleChange={handleChange}/>
                    <GeneralInput type={'phone'} value={'phone'} placeholder={'Teléfono'} handleChange={handleChange}/>
                    <GeneralInput type={'email'} value={'email'} placeholder={'correo@ejemplo.com'} handleChange={handleChange}/>
                    <Password value={'password'} handleChange={handleChange}/>
                    <Password value={'pass2'} handleChange={handleChange}/>
                    {error ? <p>{error}</p> : null}
                    <MainButton type='submit' text={'Registrarse'}/>
                </form>
            </main>
            <Footer/>
        </>
    );
};

export default RegisterPage;
