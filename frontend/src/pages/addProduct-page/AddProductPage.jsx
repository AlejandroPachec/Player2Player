import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';


function AddProductPage () {
    return (
        <>
            <MainHeader/>
            <main>
                <form>
                    <GeneralInput placeholder='¿Qué estás vendiendo?'/>
                    <GeneralInput placeholder='Categoría'/>
                    <GeneralInput placeholder='Localidad'/>
                    <GeneralInput placeholder='0'/><p> €</p>
                    <TextArea/>
                    <GeneralInput placeholder='Selecciona las fotos de tu producto' type='file'/>
                </form>
                <SecondaryButton text='Cancelar'/>
                <MainButton text='Añadir un producto' />
            </main>
        </>
    );
}

export default AddProductPage;