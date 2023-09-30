import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';


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
                </form>
            </main>
        </>
    );
}

export default AddProductPage;