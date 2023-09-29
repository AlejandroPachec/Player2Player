import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    return (
        <article>
            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${product.photo}`} alt="Foto del producto" />
            <p>{product.category}</p>
            <h2>{product.name}</h2>
            <p>{product.state}</p>
            <p>{product.city}, {new Date(product.time).toLocaleDateString('es-ES', { month: 'short', day: '2-digit' })}</p>
            <p>{product.price} €</p>
        </article>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired
};

export default ProductCard;
