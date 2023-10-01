import PropTypes from 'prop-types';


const RejectedOrderCard = ({ order }) => {
    return (
        <article>
            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product.photo}`} alt="Foto del producto" />
            <h2>{order.product.photo}</h2>
            <p>{order.product.description}</p>
            {/* <p>{order.buyer.city}, {new Date(order.time).toLocaleDateString('es-ES', { month: 'short', day: '2-digit' })}</p> */}
            <p>{order.buyer.city}</p>
            <p>{order.product.price} €</p>
        </article>
    );
};

RejectedOrderCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default RejectedOrderCard;
