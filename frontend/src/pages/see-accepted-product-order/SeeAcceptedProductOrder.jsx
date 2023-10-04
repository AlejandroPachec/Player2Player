import { useContext } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useParams } from 'react-router-dom';
import useExchangeSet from '../../hooks/useExchangeSet';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import Loading from '../../components/loading/Loading';

const SeeAcceptedProductOrder = () => {
    const { token } = useContext(UserAuthContext);
    const { idOrder } = useParams();
    const { error, loading, orderById } = useExchangeSet(token, idOrder);
    const order = orderById?.orders;
    console.log(error);
    console.log(orderById);

    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader />
            <main>
                {
                    order
                        ? <>
                            <section>
                                <UserWithRating
                                    username={order[0].seller_first_name}
                                    lastName={order[0].seller_last_name}
                                    avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${order[0].seller_avatar}`}
                                    idUser={order[0].user_seller_id}
                                />
                                <ReadOnlyRating value={order[0].userAvgReviews}/>
                                <h2>Lugar de entrega</h2>
                                <p>{order[0].exchange_place}</p>
                                <h2>Fecha de entrega</h2>
                                <p>{order[0].exchange_time}</p>
                            </section>
                            <section>
                                <h2>{order[0].name}</h2>
                                <p>{order[0].category}</p>
                                <p>{order[0].state}</p>
                                <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order[0].product_photo}`} alt="Foto del producto" />
                                <p>{order[0].description}</p>
                                <p>{order[0].exchange_place}, {order[0].exchange_time}</p>
                                <p>{order[0].price} €</p>
                            </section>
                            <aside>
                                <p>Recuerda que tu <span>valoración</span> es <span>importante</span>. Valorar al vendedor es una manera de
                                agradecer su servicio y ¡compartir tu experiencia con otros compradores!</p>
                            </aside>
                        </>
                        : null
                }
            </main>
            <Footer/>
        </>
    );
};

export default SeeAcceptedProductOrder;
