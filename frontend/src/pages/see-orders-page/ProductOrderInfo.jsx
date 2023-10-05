import PropTypes from 'prop-types';
import MainButton from '../../components/main-button/MainButton';

const ProductOrderInfo = ({ order }) => {
    const date = order?.exchange_time < new Date();

    return (
        <article>
            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product_photo}`} alt="Imagen del producto" />
            <h3>{order.name}</h3>
            <p>{order.price} €</p>
            <p>{order.state}</p>
            <p>{order.description}</p>
            {
                date < new Date()
                    ? <MainButton text={'Añadir valoración'}/>
                    : null
            }
        </article>
    );
};

ProductOrderInfo.propTypes = {
    order: PropTypes.object.isRequired
};

export default ProductOrderInfo;
