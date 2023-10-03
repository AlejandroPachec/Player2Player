import GeneralInput from '../../components/generalInput/GeneralInput';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import Footer from '../../components/footer/Footer';
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserAuthContext } from '../../context/UserAuthContext';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { exchangeSetService } from '../../service';

const ExchangeSetPage = () => {
    const { token } = useContext(UserAuthContext);
    const { idOrder } = useParams();

    const [formError, setFormError] = useState('');
    const [timeValues, setTimeValues] = useState(null);
    const [exchangePlace, setExchangePlace] = useState('');


    function handleChange (event) {
        setExchangePlace(event.target.value);
    }

    async function handleSubmit (event) {
        event.preventDefault();

        setFormError('');

        try {
            const date = new Date(timeValues);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();

            const exchangeTime = `${year}-${month}-${day} ${hour}:${minute}`;
            const newFormData = { exchangePlace, exchangeTime };
            await exchangeSetService(token, idOrder, newFormData);
        } catch (error) {
            setFormError(error.message);
        }
    }

    return (
        <>
            <MainHeader/>
            <div>
                <main>
                    <h1>Datos de la entrega</h1>
                    <section>
                        <form onSubmit={handleSubmit}>
                            <GeneralInput placeholder='Lugar de entrega' type='text' value={'exchangePlace'} handleChange={handleChange}/>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer
                                    components={[
                                        'MobileDateTimePicker'
                                    ]}
                                >
                                    <DemoItem placeholder='Selecciona un día y una hora' >
                                        <MobileDateTimePicker onChange={(newValue) => setTimeValues(newValue)}name='exchangeTime'/>
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                            <MainButton type='submit' text='Enviar'/>
                            { formError ? <p>{formError}</p> : null }
                        </form>
                    </section>

                    <section>
                        <h2>Nombre producto</h2>
                        <p>Precio</p>
                        <img src="" alt="Foto producto" />
                        <p>Fecha</p>
                    </section>
                </main>
            </div>
            <Footer />
        </>

    );
};


export default ExchangeSetPage;

