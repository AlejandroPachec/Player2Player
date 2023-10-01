import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState, useEffect } from 'react';
import { getUserService, editUserService } from '../../service';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import Loading from '../../components/loading/Loading';
import { UserAuthContext } from '../../context/UserAuthContext';

const EditUserPage = () => {
    const navigate = useNavigate();
    const { token, user } = useContext(UserAuthContext);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        city: '',
        postalCode: '',
        phone: '',
        email: '',
        password: '',
        avatar: ''
    });


    async function handleImages (event) {
        setFormValues({
            ...formValues,
            [event.target.name]: [...event.target.files]
        });
    }

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
            await editUserService(formValues);
            setTimeout(() => {
                navigate('/user/profile');
            }, 3000);
        } catch (error) {
            setError(error.message);
        }
    }

    if (!user) {
        return <Loading />;
    }

    return (
        <>
            <HeaderSecond/>
            <main>
                <h1>Editar perfil</h1>
                <form onSubmit={handleSubmit}>
                    <GeneralInput type={'text'} value={user.firstName} placeholder={'Nombre'} handleChange={handleChange}/>
                    <GeneralInput type={'text'} value={user.lastName} placeholder={'Primer apellido'} handleChange={handleChange}/>
                    <TextArea
                        placeholder={'Biografía'}
                        handleChange={handleChange}
                    />
                    <GeneralInput type={'text'} value={user.city} placeholder={'Ciudad'} handleChange={handleChange}/>
                    <GeneralInput type={'phone'} value={user.phone} placeholder={'Teléfono'} handleChange={handleChange}/>
                    <GeneralInput type={'email'} value={user.email} placeholder={'correo@ejemplo.com'} handleChange={handleChange}/>
                    <Password value={'password'} placeholder={'Nueva contraseña'} handleChange={handleChange}/>
                    <Password value={'pass2'} placeholder={'Repite la contraseña'} handleChange={handleChange}/>
                    {error ? <p>{error}</p> : null}
                    <SecondaryButton type='button' text={'Cancelar'}/>
                    <MainButton type='submit' text={'Guardar cambios'}/>
                    <input
                        placeholder='Selecciona tu foto de avatar'
                        type='file'
                        name='avatar'
                        onChange={handleImages}
                    />
                </form>
            </main>
            <Footer/>
        </>
    );
};

export default EditUserPage;
