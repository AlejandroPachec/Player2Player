import PropTypes from 'prop-types';

const ProductOrderInfo = ({ order }) => {
    return (
        <article>
            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product_photo}`} alt="Imagen del producto" />
            <h3>{order.name}</h3>
            <p>{order.price} €</p>
            <p>{order.state}</p>
            <p>{order.description}</p>
        </article>
    );
};

ProductOrderInfo.propTypes = {
    order: PropTypes.object.isRequired
};

export default ProductOrderInfo;
