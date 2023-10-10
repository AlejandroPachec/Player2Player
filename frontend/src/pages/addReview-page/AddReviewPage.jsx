import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import GeneralInput from '../../components/generalInput/GeneralInput';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import MainButton from '../../components/main-button/MainButton';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useState, useContext, useEffect } from 'react';
import { addReviewService } from '../../service';
import useExchangeSet from '../../hooks/useExchangeSet';
import { UserAuthContext } from '../../context/UserAuthContext';
import { toast } from 'react-toastify';
import './addReviewPage.css';

const AddReviewPage = () => {
    const { token } = useContext(UserAuthContext);
    const navigate = useNavigate();
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
            toast.success('Valoración añadida correctamente');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <MainHeader/>
            <main className='add-review-main'>
                {
                    orderById
                        ? <section className='add-review-card-container'>
                            <h1>¿Cómo ha sido tu experiencia</h1>
                            <div className='add-review-complete-info'>
                                <div className='add-review-card-left-content'>
                                    <div className='add-review-seller-info'>
                                        <UserWithRating
                                            username={orderById.orders[0].seller_first_name}
                                            lastName={orderById.orders[0].seller_last_name}
                                            avatar={orderById.orders[0].seller_avatar}
                                            idUser={orderById.orders[0].user_seller_id}/>
                                        <ReadOnlyRating value={orderById.orders[0].userAvgReviews_seller}/>
                                    </div>
                                    <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${orderById.orders[0].product_photo}`} alt="Foto del producto" />
                                </div>
                                <form className='add-review-card-right-content' onSubmit={handleSubmit}>
                                    <GeneralInput type={'text'} placeholder={'Título'} value={'title'} handleChange={handleChange}/>
                                    <Rating
                                        name="stars"
                                        value={formValues.stars}
                                        onChange={handleChange}
                                    />
                                    <textarea className='add-review-area'
                                        id='text'
                                        name='text'
                                        placeholder={'Añade aquí la valoración de tu experiencia'} onChange={handleChange}/>
                                    <div className='review-buttons-wrapper'>
                                        <Link to={'/user/orders'}>
                                            <SecondaryButton text={'Cancelar'} type='button'/>
                                        </Link>
                                        <MainButton text={'Enviar'} type='submit'/>
                                    </div>
                                </form>

                            </div>
                        </section>
                        : null
                }
            </main>
            <Footer/>
        </>
    );
};

export default AddReviewPage;
