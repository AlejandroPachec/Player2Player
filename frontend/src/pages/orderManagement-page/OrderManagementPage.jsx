import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import AcceptedOrderCard from './AcceptedOrderCard';
import RejectedOrderCard from './RejectedOrderCard';
import useGetUserOrders from '../../hooks/useGetUserOrders';
import Loading from '../../components/loading/Loading';
import { UserAuthContext } from '../../context/UserAuthContext';

const UserProfilePage = () => {
    const { sellerUser } = useParams();
    const { token } = useContext(UserAuthContext);
    const { loading, error, userOrders } = useGetUserOrders(sellerUser, token);
    console.log(userOrders);
    const userInfo = userOrders?.ordersInfo;
    const avgRating = userOrders?.rating?.userAvgReviews;
    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader/>
            <main>

                <section>
                    <h1>Solicitudes de compra pendientes</h1>
                    {/* {
                        userOrders
                            ? <ul id='pendingOrders'>
                                {userOrders.filter((order) => order.status === 'Pendiente').map((order) => {
                                    return <li key={order.id}><AcceptedOrderCard userInfo={userInfo} avgRating={avgRating}/></li>;
                                })}
                            </ul>
                            : <p>No tienes ninguna solicitud de compra pendiente</p>

                    } */}
                </section>
                <section>
                    {/* {
                        userOrders &&
                        <>
                            <h1>Rechazadas</h1>
                            <ul id='rejetedOrders'>
                                {userOrders.filter((order) => order.status === 'Rechazado').map((order) => {
                                    return <li key={order.id}><RejectedOrderCard product={order}/></li>;
                                })}
                            </ul>
                        </>


                    } */}

                </section>
            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
