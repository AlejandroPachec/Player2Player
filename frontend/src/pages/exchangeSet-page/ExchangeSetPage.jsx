import GeneralInput from '../../components/generalInput/GeneralInput';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
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

    const [formValues, setFormValues] = useState({
        exchangePlace: '',
        exchangeTime: dayjs()
    });

    function handleChange (event) {
        const newFormValues = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValues
        });
        console.log(formValues);
    }

    async function handleSubmit (event) {
        event.preventDefault();

        setFormError('');

        try {
            const exchangeDate = new Date(formValues.exchangeTime.$d);
            const exchangePlace = formValues.exchangePlace;
            const newFormvalues = { exchangePlace, exchangeDate };
            console.log(idOrder);
            await exchangeSetService(token, idOrder, newFormvalues);
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer
                                    components={[
                                        'MobileDateTimePicker'
                                    ]}>
                                    <DemoItem placeholder='Selecciona un día y una hora'>
                                        <MobileDateTimePicker defaultValue={dayjs()} onChange={handleChange} name='exchangeTime'/>
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
        </>

    );
};


export default ExchangeSetPage;

