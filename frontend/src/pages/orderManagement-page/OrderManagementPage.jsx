import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import OrderCard from './OrderCard';
import useGetUserOrders from '../../hooks/useGetUserOrders';
import Loading from '../../components/loading/Loading';
import { UserAuthContext } from '../../context/UserAuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfilePage = () => {
    const { sellerUser } = useParams();
    const { token } = useContext(UserAuthContext);
    const { loading, error, userOrders } = useGetUserOrders(sellerUser, token);
    const userInfo = userOrders?.ordersInfo;
    const avgRating = userOrders?.rating?.userAvgReviews;
    const navigate = useNavigate();

    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    if (loading) return <Loading/>;
    if (error) toast.error(error.message);

    return (
        <>
            <MainHeader/>
            <main>
                {
                    !error
                        ? <>
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
                                {
                                    userInfo && userInfo.some((order) => {
                                        return order.status === 'Rechazado';
                                    })
                                        ? <>
                                            <h2>Rechazadas</h2>
                                            <ul id='rejetedOrders'>
                                                {userInfo.filter((order) => order.status === 'Rechazado').map((order) => {
                                                    return <li key={order.id}><OrderCard order={order} avgRating={avgRating}/></li>;
                                                })}
                                            </ul>
                                        </>
                                        : null
                                }
                            </section>
                        </>
                        : null
                }
            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
