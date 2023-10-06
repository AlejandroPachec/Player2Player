import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import MainButton from '../../components/main-button/MainButton';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useState, useContext, useEffect } from 'react';
import { addReviewService } from '../../service';
import useExchangeSet from '../../hooks/useExchangeSet';
import { UserAuthContext } from '../../context/UserAuthContext';
const AddReviewPage = () => {
    const { token } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const [errorForm, setErrorForm] = useState(null);
    const [formValues, setFormValues] = useState({
        title: '',
        text: '',
        stars: 5
    });

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    const { idOrder } = useParams();
    const { orderById } = useExchangeSet(token, idOrder);
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addReviewService(token, formValues, idOrder);
            navigate('/user/orders');
        } catch (error) {
            setErrorForm(error.message);
        }
    };

    return (
        <>
            <MainHeader/>
            <main>
                <h1>¿Cómo ha sido tu experiencia</h1>
                {
                    orderById
                        ? <section>
                            <UserWithRating
                                username={orderById.orders[0].seller_first_name}
                                lastName={orderById.orders[0].seller_last_name}
                                avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${orderById.orders[0].seller_avatar}`}
                                idUser={orderById.orders[0].user_seller_id}/>
                            <ReadOnlyRating value={orderById.orders[0].userAvgReviews_seller}/>
                            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${orderById.orders[0].product_photo}`} alt="Foto del producto" />
                        </section>
                        : null
                }
                <section>
                    <form onSubmit={handleSubmit}>
                        <GeneralInput type={'text'} placeholder={'Título'} value={'title'} handleChange={handleChange}/>
                        <Rating
                            name="stars"
                            value={formValues.stars}
                            onChange={handleChange}
                        />
                        <TextArea placeholder={'Añade aquí la valoración de tu experiencia'} value={'text'} handleChange={handleChange}/>
                        <Link to={'/user/orders'}>
                            <SecondaryButton text={'Cancelar'} type='button'/>
                        </Link>
                        <MainButton text={'Enviar'} type='submit'/>
                        <p>{errorForm}</p>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default AddReviewPage;
