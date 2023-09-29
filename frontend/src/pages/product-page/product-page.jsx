import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import { useParams, Link } from 'react-router-dom';
import useGetProduct from '../../hooks/useGetProduct';
import Loading from '../../components/loading/Loading';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import MainButton from '../../components/main-button/MainButton';
import SliderPhotoProduct from './SliderPhotoProduct';
import { useContext } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { addOrderService } from '../../service';

const ProductPage = () => {
    const { idProduct } = useParams();
    const { article, error, loading } = useGetProduct(idProduct);
    const { token } = useContext(UserAuthContext);

    const { product, productImages, user } = article;
    const userSellerId = user?.id;

    if (loading) return <Loading/>;
    if (error) return <p>{error}</p>;

    const handleClick = async () => {
        try {
            await addOrderService(idProduct, token, { userSellerId });
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <>
            <MainHeader/>
            <main>
                <UserWithRating
                    username={user?.first_name}
                    lastName={user?.last_name}
                    avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${user?.avatar}`}/>
                <article>
                    <SliderPhotoProduct productImages={productImages}/>
                    <h2>{product?.name}</h2>
                    <p>{product?.category}</p>
                    <p>{product?.description}</p>
                    <p>{user?.city}, {new Date(product?.time).toLocaleString('es-ES', { month: 'short', day: '2-digit' })}</p>
                    <p>{product?.state}</p>
                    <p>{product?.price} €</p>
                    {
                        token
                            ? <Link to={'/'}>
                                <MainButton text={'Comprar'} handleClick={handleClick}/>
                            </Link>
                            : <Link to={'/user/login'}><MainButton text={'Comprar'}/></Link>
                    }
                </article>
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;
