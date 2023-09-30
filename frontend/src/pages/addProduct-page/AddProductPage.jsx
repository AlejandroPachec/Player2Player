import { useContext, useState } from 'react';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import useAddProduct from '../../hooks/useAddProduct';
import { UserAuthContext } from '../../context/UserAuthContext';

function AddProductPage () {
    const [formData, setFormData] = useState({});
    const { token } = useContext(UserAuthContext);


    const { isSubmitting, submissionError, handleFileInputChange } = useAddProduct(token, {
        title: '',
        category: '',
        location: '',
        price: '',
        description: '',
        images: []
    });


    if (submissionError) {
        return <p>Hubo un error al enviar el formulario</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <MainHeader />
            <main>
                <form onSubmit={handleFormSubmit}>
                    <GeneralInput
                        placeholder="¿Qué estás vendiendo?"
                        name="title"
                        onChange={handleChange}
                    />
                    <GeneralInput
                        placeholder="Categoría"
                        name="category"
                        onChange={handleChange}
                    />
                    <GeneralInput
                        placeholder="Precio"
                        name="price"
                        type="number"
                        onChange={handleChange}
                    />
                    <TextArea
                        placeholder="Descripción"
                        name="description"
                        onChange={handleChange}
                    />
                    <input
                        placeholder="Selecciona las fotos de tu producto"
                        type="file"
                        name="images"
                        multiple
                        onChange={handleFileInputChange}
                    />
                    <SecondaryButton text="Cancelar" />
                    <MainButton text="Añadir un producto" type="submit" disabled={isSubmitting} />
                </form>
            </main>
        </>
    );
}

export default AddProductPage;
