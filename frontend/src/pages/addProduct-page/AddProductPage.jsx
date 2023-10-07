import { useContext, useEffect, useState } from 'react';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import { UserAuthContext } from '../../context/UserAuthContext';
import { addProductService } from '../../service';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddProductPage () {
    const { token } = useContext(UserAuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        location: '',
        price: '',
        state: '',
        description: '',
        photos: []
    });

    function handleChange (event) {
        const newFormValues = event.target.value;

        setFormData({
            ...formData,
            [event.target.name]: newFormValues
        });
    }

    async function handleImages (event) {
        setFormData({
            ...formData,
            [event.target.name]: [...event.target.files]
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await addProductService(token, formData);
            navigate('/');
            toast.success('Producto añadido correctamente ');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <MainHeader />
            <main>
                <form onSubmit={handleFormSubmit}>
                    <GeneralInput
                        placeholder={'¿Qué estás vendiendo?'}
                        value={'title'}
                        type={'text'}
                        handleChange={handleChange}
                    />
                    <select name="category" id="category" onChange={handleChange}>
                        <option value="">Selecciona la categoría</option>
                        <option value="Consolas">Consolas</option>
                        <option value="Videojuegos">Videojuegos</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Retro">Retro</option>
                        <option value="Ordenadores">Ordenadores</option>
                    </select>
                    <GeneralInput
                        placeholder={'Precio'}
                        value={'price'}
                        type={'number'}
                        handleChange={handleChange}
                    />
                    <select name="state" id="state" onChange={handleChange}>
                        <option value="">Selecciona el estado</option>
                        <option value="Nuevo">Nuevo</option>
                        <option value="En buen estado">En buen estado</option>
                        <option value="Aceptable">Aceptable</option>
                        <option value="No da para más">No da para más</option>
                    </select>
                    <TextArea
                        placeholder={'Descripción'}
                        value={'description'}
                        handleChange={handleChange}
                    />
                    <input
                        placeholder='Selecciona las fotos de tu producto'
                        type='file'
                        name='photos'
                        multiple
                        onChange={handleImages}
                    />
                    <Link to={'/'}>
                        <SecondaryButton text={'Cancelar'} />
                    </Link>
                    <MainButton text={'Añadir un producto'} type="submit" />
                </form>
            </main>
        </>
    );
}

export default AddProductPage;
