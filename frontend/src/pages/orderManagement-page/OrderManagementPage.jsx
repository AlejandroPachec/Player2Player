import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import OrderCard from './OrderCard';
import useGetUserOrders from '../../hooks/useGetUserOrders';
import Loading from '../../components/loading/Loading';
import { UserAuthContext } from '../../context/UserAuthContext';

const UserProfilePage = () => {
    const { sellerUser } = useParams();
    const { token } = useContext(UserAuthContext);
    const { loading, error, userOrders } = useGetUserOrders(sellerUser, token);
    const userInfo = userOrders?.ordersInfo;
    console.log(userInfo);
    const avgRating = userOrders?.rating?.userAvgReviews;
    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader/>
            <main>

                <section>
                    <h2>Solicitudes de compra pendientes</h2>
                    {
                        userInfo
                            ? <ul id='pendingOrders'>
                                {userInfo.filter((order) => order.status === 'Pendiente').map((order) => {
                                    return <li key={order.id}>
                                        <OrderCard order={order} avgRating={avgRating}/>
                                    </li>;
                                })}
                            </ul>
                            : <p>No tienes ninguna solicitud de compra pendiente</p>
                    }
                </section>
                <section>
                    <h2>Rechazadas</h2>
                    {
                        userInfo
                            ? <ul id='rejetedOrders'>
                                {userInfo.filter((order) => order.status === 'Rechazado').map((order) => {
                                    return <li key={order.id}><OrderCard order={order} avgRating={avgRating}/></li>;
                                })}
                            </ul>
                            : <p>No has rechazado niguna solicitud</p>
                    }
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
