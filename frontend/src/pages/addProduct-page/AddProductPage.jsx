import { useContext } from 'react';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import useAddProduct from '../../hooks/useAddProduct';
import { UserAuthContext } from '../../context/UserAuthContext';

function AddProductPage () {
    const { token } = useContext(UserAuthContext);

    const { formData, isSubmitting, submissionError, handleChange, handleSubmit, handleFileInputChange } = useAddProduct({
        title: '',
        category: '',
        location: '',
        price: '',
        description: '',
        images: []
    });


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const response = await handleSubmit(formData, token);

        if (response) {
            console.log('Producto agregado con éxito:', response);
        } else {
            console.error('Error al agregar el producto:', submissionError);
        }
    };

    return (
        <>
            <MainHeader />
            <main>
                <form onSubmit={handleFormSubmit}>
                    <GeneralInput
                        placeholder="¿Qué estás vendiendo?"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <GeneralInput
                        placeholder="Categoría"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                    <GeneralInput
                        placeholder="Localidad"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                    <GeneralInput
                        placeholder="Precio"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                    />
                    <TextArea
                        placeholder="Descripción"
                        name="description"
                        value={formData.description}
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
