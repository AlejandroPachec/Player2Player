import PropTypes from 'prop-types';
import MainButton from '../../components/main-button/MainButton';
import { useNavigate } from 'react-router-dom';
import useCheckReviews from '../../hooks/useCheckReviews';
import Loading from '../../components/loading/Loading';
import { toast } from 'react-toastify';

const ProductOrderInfo = ({ order }) => {
    const date = new Date();
    const navigate = useNavigate();
    const { error, loading, alreadyReviewed } = useCheckReviews(order.user_buyer_id);
    const userReviews = alreadyReviewed?.userReviews;

    const isProductReviewed = userReviews?.some((review) => order.product_id === review.product_id);
    const hasDeliveryTimePassed = date > new Date(order.exchange_time);

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
            <article>
                <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product_photo}`} alt="Imagen del producto" />
                <h3>{order.name}</h3>
                <p>{order.price} €</p>
                <p>{order.state}</p>
                <p>{order.description}</p>
            </article>
            {
                hasDeliveryTimePassed && !isProductReviewed && order.status === 'Aceptado'
                    ? <MainButton text={'Añadir valoración'} handleClick={handleClick}/>
                    : null
            }
        </>
    );
};

ProductOrderInfo.propTypes = {
    order: PropTypes.object.isRequired
};

export default ProductOrderInfo;
