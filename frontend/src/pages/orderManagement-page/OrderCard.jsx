import PropTypes from 'prop-types';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import MainButton from '../../components/main-button/MainButton';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';

const OrderCard = ({ order, avgRating }) => {
    return (
        <article>
            <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order.product_photo}`} alt="Foto del producto" />
            <h2>{order.product_name}</h2>
            {
                order.status === 'Pendiente'
                    ? <p>{order.price} €</p>
                    : null
            }
            <p>{order.description}</p>
            {
                order.status === 'Pendiente'
                    ? <>
                        { order.avatar
                            ? <UserWithRating
                                username={order.seller_first_name}
                                lastName={order.seller_last_name}
                                avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${order.avatar}`}
                                idUser={order.user_buyer_id} />
                            : null
                        }
                        <ReadOnlyRating value={avgRating}/>
                        <SecondaryButton text='Rechazar' />
                        <MainButton text='Aceptar' />
                    </>
                    : null
            }
            <p>Por {order.seller_first_name} {order.seller_last_name} el {new Date(order.created_at).toLocaleDateString('es-ES', { month: 'long', day: '2-digit' })} de {new Date(order.created_at).getFullYear()}</p>
        </article>
    );
};

OrderCard.propTypes = {
    order: PropTypes.object.isRequired,
    avgRating: PropTypes.number.isRequired
};

export default OrderCard;
