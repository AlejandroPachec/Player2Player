import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
    const { product_photos: photos, product_category: category, product_name: name, product_state: state, seller_city: sellerCity, product_time: time, product_price: price } = product;
    return (
        <article>
            <img src={`http://localhost:5002/uploads/${photos[0]}`} alt="La imagen del producto" />
            <p>{category}</p>
            <h2>{name}</h2>
            <p>{state}</p>
            <p>{sellerCity}, {new Date(time).toLocaleDateString('es-ES', { month: 'short', day: '2-digit' })}</p>
            <p>{price} €</p>
        </article>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductItem;
