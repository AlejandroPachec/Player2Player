import Footer from '../../components/footer/Footer';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState, useContext } from 'react';
import { editUserService } from '../../service';
import { useNavigate } from 'react-router-dom';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { UserAuthContext } from '../../context/UserAuthContext';
import MainHeader from '../../components/header-main/MainHeader';

const EditUserPage = () => {
    const navigate = useNavigate();
    const { token, user, updateUser } = useContext(UserAuthContext);
    const [passError, setPassError] = useState('');
    const [errorSubmit, setErrorSubmit] = useState('');

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

    function handleChange (event) {
        const newFormValues = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValues
        });
    }

    async function handleImages (event) {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.files[0]
        });
    }

    async function handleSubmit (event) {
        event.preventDefault();

        if (formValues.password !== '' && formValues.pass2 !== '') {
            if (formValues.password !== formValues.pass2) {
                setPassError('Los campos de contraseña no coinciden');
            }
        }

        const editUserForm = new FormData();

        for (const value in formValues) {
            if (value !== 'pass2' && formValues[value] !== '') {
                editUserForm.append(value, formValues[value]);
            }
        }

        try {
            console.log(formValues);
            const data = await editUserService(token, editUserForm);
            if (formValues.avatar !== '') { formValues.avatar = data.updatedUser.avatar; }
            updateUser(token, formValues);
            navigate(`/user/profile/${user.id}`);
        } catch (error) {
            console.log(error);
            setErrorSubmit(error.message);
        }
    }

    return (
        <>
            <MainHeader/>
            <main>
                <h1>Editar perfil</h1>
                <form onSubmit={handleSubmit}>
                    <GeneralInput type={'text'} value={'firstName'} placeholder={'Nombre'} handleChange={handleChange}/>
                    <GeneralInput type={'text'} value={'lastName'} placeholder={'Primer apellido'} handleChange={handleChange}/>
                    <TextArea
                        placeholder={'Biografía'}
                        handleChange={handleChange}
                        value={'bio'}
                    />
                    <GeneralInput type={'text'} value={'city'} placeholder={'Ciudad'} handleChange={handleChange}/>
                    <GeneralInput type={'phone'} value={'phone'} placeholder={'Teléfono'} handleChange={handleChange}/>
                    <GeneralInput type={'email'} value={'email'} placeholder={'correo@ejemplo.com'} handleChange={handleChange}/>
                    <Password value={'password'} placeholder={'Nueva contraseña'} handleChange={handleChange}/>
                    <Password value={'pass2'} placeholder={'Repite la contraseña'} handleChange={handleChange}/>
                    {passError ? <p>{passError}</p> : null}
                    <input
                        placeholder='Selecciona tu foto de avatar'
                        type='file'
                        name='avatar'
                        onChange={handleImages}
                    />
                    <SecondaryButton type='button' text={'Cancelar'}/>
                    <MainButton type='submit' text={'Guardar cambios'}/>
                </form>
                { errorSubmit ? <p>{errorSubmit}</p> : null}
            </main>
            <Footer/>
        </>
    );
};

export default EditUserPage;

