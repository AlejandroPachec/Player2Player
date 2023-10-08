import Footer from '../../components/footer/Footer';
import GeneralInput from '../../components/generalInput/GeneralInput';
import Password from '../../components/password/Password';
import MainButton from '../../components/main-button/MainButton';
import { useState, useContext, useEffect } from 'react';
import { editUserService } from '../../service';
import { useNavigate } from 'react-router-dom';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { UserAuthContext } from '../../context/UserAuthContext';
import MainHeader from '../../components/header-main/MainHeader';
import { toast } from 'react-toastify';
import './editUserPage.css';

const EditUserPage = () => {
    const navigate = useNavigate();
    const { token, user, updateUser } = useContext(UserAuthContext);

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

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
                toast.error('Los campos de contraseña no coinciden');
            }
        }

        const editUserForm = new FormData();

        for (const value in formValues) {
            if (value !== 'pass2' && formValues[value] !== '') {
                editUserForm.append(value, formValues[value]);
            }
        }

        try {
            const data = await editUserService(token, editUserForm);
            if (formValues.avatar !== '') { formValues.avatar = data.updatedUser.avatar; }
            updateUser(token, formValues);
            navigate(`/user/profile/${user.id}`);
            toast.success('Usuario editado correctamente');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    return (
        <>
            <MainHeader/>
            <main className='edit-user-main'>
                <h1 className='edit-user-title'>Editar perfil</h1>
                <div className='edit-info-container'>
                    <form className='edit-info-form' onSubmit={handleSubmit}>
                        <GeneralInput
                            id='edit-input'
                            className='general-input-edit'
                            type={'text'} value={'firstName'} placeholder={'Nombre'} handleChange={handleChange}/>
                        <GeneralInput className='general-input-edit' type={'text'} value={'lastName'} placeholder={'Primer apellido'} handleChange={handleChange}/>
                        <GeneralInput className='general-input-edit' type={'text'} value={'city'} placeholder={'Ciudad'} handleChange={handleChange}/>
                        <GeneralInput className='general-input-edit' type={'text'} value={'postalCode'} placeholder={'Código postal'} handleChange={handleChange}/>
                        <GeneralInput className='general-input-edit' type={'phone'} value={'phone'} placeholder={'Teléfono'} handleChange={handleChange}/>
                        <GeneralInput className='general-input-edit' type={'email'} value={'email'} placeholder={'correo@ejemplo.com'} handleChange={handleChange}/>
                        <Password value={'edit-password'} placeholder={'Nueva contraseña'} handleChange={handleChange}/>
                        <Password value={'edit-pass2'} placeholder={'Repite la contraseña'} handleChange={handleChange}/>

                        <TextArea className='text-area-edit-profile'
                            placeholder={'Biografía'}
                            handleChange={handleChange}
                            value={'bio'}
                        />
                        <label htmlFor="imageUpload" className="edit-addAvatar">Selecciona tu avatar</label>
                        <input
                            id='imageUpload'
                            className='edit-user-fileInput'
                            style={{ display: 'none' }}
                            type='file'
                            name='avatar'
                            onChange={handleImages}
                        />


                        <div className='edit-buttons'>
                            <SecondaryButton type='button' text={'Cancelar'}/>
                            <MainButton type='submit' text={'Guardar cambios'}/>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default EditUserPage;

