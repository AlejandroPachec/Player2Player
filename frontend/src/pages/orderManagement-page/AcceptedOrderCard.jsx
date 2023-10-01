import PropTypes from 'prop-types';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import MainButton from '../../components/main-button/MainButton';

const AcceptedOrderCard = ({ userInfo, avgRating }) => {
    return (
        <article>
            {/* <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${userInfo.photo}`} alt="Foto del producto" />
            <h2>{order.product.photo}</h2>
            <p>{order.product.description}</p> */}
            {/* <p>{order.buyer.city}, {new Date(order.time).toLocaleDateString('es-ES', { month: 'short', day: '2-digit' })}</p> */}
            {/* <p>{order.buyer.city}</p>
            <p>{order.product.price} €</p>
            <UserWithRating username={order.buyer.username} lastName={order.buyer.lastName} avatar={order.buyer.avatar} idUser={order.buyer.id} />
            <MainButton text='Rechazar' />
            <MainButton text='Aceptar' /> */}
        </article>
    );
};

AcceptedOrderCard.propTypes = {
    userInfo: PropTypes.object.isRequired,
    avgRating: PropTypes.number.isRequired
};

export default AcceptedOrderCard;
