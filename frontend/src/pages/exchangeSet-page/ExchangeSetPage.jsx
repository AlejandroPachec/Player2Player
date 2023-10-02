import GeneralInput from '../../components/generalInput/GeneralInput';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import { useState, useContext, useParams } from 'react';
import useExchangeSet from '../../hooks/useExchangeSet';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from '../../context/UserAuthContext';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

const ExchangeSetPage = () => {
    const { token } = useContext(UserAuthContext);
    const { idOrder } = useParams();

    const { exchangeSet, error, loading } = useExchangeSet(order, token);

    const [formValues, setFormValues] = useState({
        exchangePlace: '',
        exchangeTime: ''
    });

    function handleChange (event) {
        const newFormValues = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValues
        });
    }



    return (
        <div>
            <MainHeader/>
            <h1>Datos de la entrega</h1>
            <form action="">
                <GeneralInput placeholder='Lugar de entrega' type='text' value={formValues.exchangePlace} onChange={handleChange}/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer
                        components={[
                            'MobileDateTimePicker'
                        ]}>
                        <DemoItem label="Mobile variant">
                            <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>

                    </DemoContainer>
                </LocalizationProvider>;
                <MainButton text='Enviar' onClick={handleSubmit}/>
            </form>
        </div>
    );
};


export default ExchangeSetPage;

<LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer
        components={[
            'MobileDateTimePicker'
        ]}>
        <DemoItem label="Mobile variant">
            <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>

    </DemoContainer>
</LocalizationProvider>;
