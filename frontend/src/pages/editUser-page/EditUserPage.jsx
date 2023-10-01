import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState, useContext } from 'react';
import { editUserService } from '../../service';
import { useNavigate } from 'react-router-dom';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import Loading from '../../components/loading/Loading';
import { UserAuthContext } from '../../context/UserAuthContext';

const EditUserPage = () => {
    const navigate = useNavigate();
    const { token, user } = useContext(UserAuthContext);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '' || user.first_name,
        lastName: '' || user.last_name,
        bio: '' || user.bio,
        city: '' || user.city,
        postalCode: '' || user.postal_code,
        phone: '' || user.phone_number,
        email: '' || user.email,
        password: '' || user.password,
        avatar: [] || user.avatar
    });


    async function handleImages (event) {
        setFormData({
            ...formData,
            [event.target.name]: [...event.target.files]
        });
    }

    function handleChange (event) {
        const newFormData = event.target.value;

        setFormData({
            ...formData,
            [event.target.name]: newFormData
        });
    }

    async function handleSubmit (event) {
        event.preventDefault();

        setError('');

        if (formData.password !== formData.pass2) {
            setError('Los campos de contraseña no coinciden');
        }

        try {
            await editUserService(token, formData);
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
                    <GeneralInput type={'text'} value={'firstName'} placeholder={'Nombre'} handleChange={handleChange}/>
                    <GeneralInput type={'text'} value={'lastName'} placeholder={'Primer apellido'} handleChange={handleChange}/>
                    <TextArea
                        placeholder={'Biografía'}
                        value={'bio'}
                        handleChange={handleChange}
                    />
                    <GeneralInput type={'text'} value={'city'} placeholder={'Ciudad'} handleChange={handleChange}/>
                    <GeneralInput type={'text'} value={'postalCode'} placeholder={'Código postal'} handleChange={handleChange}/>
                    <GeneralInput type={'phone'} value={'phone'} placeholder={'Teléfono'} handleChange={handleChange}/>
                    <GeneralInput type={'email'} value={'email'} placeholder={'correo@ejemplo.com'} handleChange={handleChange}/>
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
