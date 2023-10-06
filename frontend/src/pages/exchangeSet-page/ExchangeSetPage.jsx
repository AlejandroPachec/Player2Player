import GeneralInput from '../../components/generalInput/GeneralInput';
import MainHeader from '../../components/header-main/MainHeader';
import MainButton from '../../components/main-button/MainButton';
import Footer from '../../components/footer/Footer';
import { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserAuthContext } from '../../context/UserAuthContext';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { exchangeSetService } from '../../service';
import useExchangeSet from '../../hooks/useExchangeSet';
import Loading from '../../components/loading/Loading';

const ExchangeSetPage = () => {
    const { token } = useContext(UserAuthContext);
    const { idOrder } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    const [formError, setFormError] = useState('');
    const [timeValues, setTimeValues] = useState(null);
    const [exchangePlace, setExchangePlace] = useState('');

    const { error, loading, orderById } = useExchangeSet(token, idOrder);
    const orders = orderById?.orders;

    function handleChange (event) {
        setExchangePlace(event.target.value);
    }

    if (loading) return <Loading />;
    if (error) return <p>{error.message}</p>;
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
            <MainHeader />
            <div>
                <main>
                    <h1>Datos de la entrega</h1>
                    <section>
                        <form onSubmit={handleSubmit}>
                            <GeneralInput placeholder='Lugar de entrega' type='text' value={'exchangePlace'} handleChange={handleChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer
                                    components={[
                                        'MobileDateTimePicker'
                                    ]}
                                >
                                    <DemoItem placeholder='Selecciona un día y una hora' >
                                        <MobileDateTimePicker onChange={(newValue) => setTimeValues(newValue)} name='exchangeTime' />
                                    </DemoItem>
                                </DemoContainer>
                            </LocalizationProvider>
                            <MainButton type='submit' text='Enviar' />
                            {formError ? <p>{formError}</p> : null}
                        </form>
                    </section>

                    <section>
                        {
                            orders
                                ? <>
                                    <h2>{orders[0].name}</h2>
                                    <p>{orders[0].price}</p>
                                    <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${orders[0].product_photo}`} alt="Foto producto" />
                                    <p>Por {orders[0].first_name} {orders[0].last_name}, el {new Date(orders[0].created_at).toLocaleDateString('es-ES', { month: 'long', day: '2-digit', year: 'numeric' })}</p>
                                </>
                                : null
                        }
                    </section>
                </main>
            </div>
            <Footer />
        </>

    );
};


export default ExchangeSetPage;

