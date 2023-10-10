import PropTypes from 'prop-types';
import MainButton from '../../components/main-button/MainButton';
import { useNavigate } from 'react-router-dom';
import useCheckReviews from '../../hooks/useCheckReviews';
import Loading from '../../components/loading/Loading';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import './productOrderInfo.css';

const ProductOrderInfo = ({ order }) => {
    const date = new Date();
    const navigate = useNavigate();
    const { error, loading, alreadyReviewed } = useCheckReviews(order.user_buyer_id);
    const userReviews = alreadyReviewed?.userReviews;

    const isProductReviewed = userReviews?.some((review) => order.product_id === review.product_id);

    const hasDeliveryTimePassed = date > new Date(order.exchange_time);

    const [stateColor, setStateColor] = useState('');
    function changeColor () {
        if (order?.state === 'Nuevo' || order?.state === 'En buen estado') {
            setStateColor('#32f569');
        }
        if (order?.state === 'Aceptable') {
            setStateColor('#eaee34');
        }
        if (order?.state === 'No da para más') {
            setStateColor('#f14444');
        }
    }

    useEffect(() => {
        changeColor();
    });


    if (loading) {
        return <Loading />;
    }

    if (error) return toast.error(error);
    function handleClick (event) {
        event.preventDefault();
        navigate(`/order/addReview/${order.id}`);
    }

    return (
        <>
            <article className='see-your-orders-card'>
                <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product_photo}`} alt="Imagen del producto" />
                <div className='see-your-orders-card-info'>
                    <div className='see-your-orders-name-price'>
                        <h3>{order.name}</h3>
                        <p>{order.price} €</p>
                    </div>
                    <div>
                        <p style={{ color: stateColor }}>{order.state}</p>
                        <p>{order.description}</p>
                        {
                            hasDeliveryTimePassed && !isProductReviewed && order.status === 'Aceptado'
                                ? <MainButton text={'Añadir valoración'} handleClick={handleClick}/>
                                : null
                        }
                    </div>
                </div>
            </article>
        </>
    );
};

ProductOrderInfo.propTypes = {
    order: PropTypes.object.isRequired
};

export default ProductOrderInfo;
