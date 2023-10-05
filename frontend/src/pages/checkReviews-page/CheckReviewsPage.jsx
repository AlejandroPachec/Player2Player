import { useContext } from 'react';
import useCheckDate from '../../hooks/useCheckDate';
import { UserAuthContext } from '../../context/UserAuthContext';
import Loading from '../../components/loading/Loading';
import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import ProductChecked from './ProductChecked';

const CheckReviewsPage = () => {
    const { token } = useContext(UserAuthContext);
    const { error, loading, checkedDate } = useCheckDate(token);

    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader/>
            <main>
                <ul>
                    {
                        checkedDate
                            ? checkedDate.map((order) => {
                                return <li key={order.id}>
                                    <ProductChecked order={order}/>
                                </li>;
                            })
                            : null
                    }
                </ul>
            </main>
            <Footer/>
        </>
    );
};

export default CheckReviewsPage;
