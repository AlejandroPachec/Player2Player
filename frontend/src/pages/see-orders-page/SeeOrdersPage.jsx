import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header-main/MainHeader';
import { UserAuthContext } from '../../context/UserAuthContext';
import { useContext, useEffect } from 'react';
import useSeeOrders from '../../hooks/useSeeOrders';
import ProductOrderInfo from './ProductOrderInfo';
import Loading from '../../components/loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './seeOrdersPage.css';

const SeeOrders = () => {
    const { token } = useContext(UserAuthContext);
    const { orders, error, loading } = useSeeOrders(token);
    const navigate = useNavigate();
    console.log(orders);


    useEffect(() => {
        if (token === '' || !token) {
            navigate('/user/login');
        }
    }, []);

    if (loading) return <Loading />;

    if (error) {
        toast.error(error);
        navigate('/');
    }

    return (
        <>
            <MainHeader />
            <main className='see-your-orders-main'>
                { error
                    ? <p>{'No tienes ningún pedido de momento'}</p>
                    : <>
                        <section className='your-orders-section'>
                            <h2>Pendientes</h2>
                            <ul id='your-pending-orders'>
                                {
                                    orders.orders
                                        ? orders.orders.filter((order) => order.status === 'Pendiente').map((order) => {
                                            return <li key={order.id}>
                                                <ProductOrderInfo order={order} />
                                            </li>;
                                        })
                                        : null
                                }

                            </ul>
                        </section>
                        <section className='your-orders-section'>
                            {
                                orders.orders && orders.orders.some((order) => {
                                    return order.status === 'Aceptado';
                                })
                                    ? <>
                                        <h2>Aceptados</h2>
                                        <ul id='your-accepted-orders-list'>
                                            {orders.orders.filter((order) => order.status === 'Aceptado').map((order) => {
                                                return <li key={order.id}>
                                                    <Link to={`/order/accepted/${order.id}`}>
                                                        <ProductOrderInfo order={order} />
                                                    </Link>
                                                </li>;
                                            })}
                                        </ul>
                                    </>
                                    : null
                            }
                        </section>
                        <section className='your-rejected-orders-section'>
                            {
                                orders.orders && orders.orders.some((order) => {
                                    return order.status === 'Rechazado';
                                })
                                    ? <>
                                        <h2>Rechazados</h2>
                                        <ul className='your-rejected-orders-list'>
                                            {orders.orders.filter((order) => order.status === 'Rechazado').map((order) => {
                                                return <li key={order.id}>
                                                    <ProductOrderInfo order={order} />
                                                </li>;
                                            })}
                                        </ul>
                                    </>
                                    : null
                            }
                        </section>

                    </>}
            </main>
            <Footer />
        </>
    );
};

export default SeeOrders;
