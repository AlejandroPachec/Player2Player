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
import { toast } from 'react-toastify';
import './exchangePageStyle.css';

const ExchangeSetPage = () => {
    const { token, user } = useContext(UserAuthContext);
    const { idOrder } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    const [timeValues, setTimeValues] = useState(null);
    const [exchangePlace, setExchangePlace] = useState('');

    const { error, loading, orderById } = useExchangeSet(token, idOrder);
    const orders = orderById?.orders;

    function handleChange (event) {
        setExchangePlace(event.target.value);
    }

    if (loading) return <Loading />;
    if (error) return toast.error(error);
    async function handleSubmit (event) {
        event.preventDefault();

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
            toast.success('Le enviaremos un email al comprador con los datos');
            navigate(`/user/orders/${user.id}`);
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <MainHeader />
            <main>
                <div className="exchange-data-container">
                    <h1>Datos de la entrega</h1>
                    <div className="exchange-section-container">
                        <section className='exchange-data-section'>
                            <form onSubmit={handleSubmit} className='exchange-form'>
                                <GeneralInput placeholder='Lugar de entrega' type='text' value={'exchangePlace'} handleChange={handleChange} />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'MobileDateTimePicker'
                                        ]}
                                    >
                                        <DemoItem placeholder='Selecciona un día y una hora'>
                                            <MobileDateTimePicker
                                                sx={{ color: 'white' }}
                                                onChange={(newValue) => setTimeValues(newValue)} name='exchangeTime' />
                                        </DemoItem>
                                    </DemoContainer>
                                </LocalizationProvider>
                                <MainButton type='submit' text='Enviar' />
                            </form>
                        </section>
                        <section className='exchange-product-section'>
                            {
                                orders
                                    ? <>
                                        <div className="exchange-product-name">
                                            <h2>{orders[0].name}</h2>
                                            <p>{orders[0].price} €</p>
                                        </div>
                                        <div className="exchange-product-complete-info">
                                            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${orders[0].product_photo}`} alt="Foto producto" />
                                            <div className="exchange-product-text-info">
                                                <p>{orders[0].description}</p>
                                                <p className='exchange-buyer'>Por {orders[0].buyer_first_name} {orders[0].buyer_last_name}, el {new Date(orders[0].created_at).toLocaleDateString('es-ES', { month: 'long', day: '2-digit', year: 'numeric' })}</p>
                                            </div>
                                        </div>
                                    </>
                                    : null
                            }
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>

    );
};


export default ExchangeSetPage;

