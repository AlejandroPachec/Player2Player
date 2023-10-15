import { useEffect, useState, useContext } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import useExchangeSet from '../../hooks/useExchangeSet';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import Loading from '../../components/loading/Loading';
import { getDataExchangeMap } from '../../service';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import './map.css';
import './seeAcceptedProductOrderSyle.css';
import { toast } from 'react-toastify';

const SeeAcceptedProductOrder = () => {
    const { token } = useContext(UserAuthContext);
    const { idOrder } = useParams();
    const { error, loading, orderById } = useExchangeSet(token, idOrder);
    const order = orderById?.orders;
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const navigate = useNavigate();

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS;
    const { isLoaded } = useLoadScript({ googleMapsApiKey: apiKey });

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    useEffect(() => {
        const loadMap = async () => {
            try {
                const data = await getDataExchangeMap(orderById?.orders[0]?.exchange_place);
                setLatitude(data.lat);
                setLongitude(data.lng);
            } catch (error) {
                throw new Error(error.message);
            }
        };
        loadMap();
    }, [orderById]);

    if (loading) return <Loading />;
    if (error) return toast.error(error);

    return (
        <>
            <MainHeader />
            <main>
                {
                    order
                        ? <div className='accepted-order-info-container'>
                            <div className="user-rating-and-stars">
                                <UserWithRating
                                    username={order[0].seller_first_name}
                                    lastName={order[0].seller_last_name}
                                    avatar={order[0].seller_avatar}
                                    idUser={order[0].user_seller_id}
                                />
                                <ReadOnlyRating value={order[0].userAvgReviews_seller} />
                            </div>
                            <div className="acceped-order-section-container">
                                <section className='map-and-date-info'>
                                    <div className="map-time-date-container">
                                        <h2>Lugar de entrega</h2>
                                        <p>{order[0].exchange_place}</p>
                                        {
                                            isLoaded && latitude && longitude
                                                ? <GoogleMap zoom={9} center={{ lat: latitude, lng: longitude }} mapContainerClassName='map-container' />
                                                : null
                                        }
                                        <h3>Contacta con el vendedor para fijar una <strong>ubicación</strong> concreta</h3>
                                        <h2>Fecha de entrega</h2>
                                        <p>{new Date(order[0].exchange_time).toLocaleTimeString('es-ES', { month: 'long', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                </section>
                                <section className='order-product-info-secion'>
                                    <div className="order-name-category-conainer">
                                        <h2>{order[0].name}</h2>
                                        <p>{order[0].category}</p>
                                    </div>
                                    <div className="order-accept-product-full-info">
                                        <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${order[0].product_photo}`} alt="Foto del producto" />
                                        <div className="order-accept-product-info">
                                            <p className='go-to-right accept-order-state'>{order[0].state}</p>
                                            <p className='description-p-order'>{order[0].description}</p>
                                            <p className='accept-order-city'>{order[0].exchange_place}, {new Date(order[0].exchange_time).toLocaleString('es-ES', { month: 'short', day: '2-digit' })}</p>
                                            <p className='go-to-right accept-order-price'>{order[0].price} €</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <aside>
                                <p>Recuerda que tu <strong>valoración</strong> es <span>importante</span>. <br /> Valorar al vendedor es una manera de
                                    agradecer su servicio y ¡compartir tu experiencia con otros compradores!</p>
                            </aside>
                        </div>
                        : null
                }
            </main>
            <Footer />
        </>
    );
};

export default SeeAcceptedProductOrder;
