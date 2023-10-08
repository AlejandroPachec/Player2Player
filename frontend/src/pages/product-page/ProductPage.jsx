import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useGetProduct from '../../hooks/useGetProduct';
import Loading from '../../components/loading/Loading';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import MainButton from '../../components/main-button/MainButton';
import SliderPhotoProduct from './SliderPhotoProduct';
import { useContext, useEffect, useState } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import { addOrderService } from '../../service';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import { toast } from 'react-toastify';
import './productPageStyles.css';
import './sliderPhotoStyle.css';

const ProductPage = () => {
    const { idProduct } = useParams();
    const { article, error, loading } = useGetProduct(idProduct);
    const { token } = useContext(UserAuthContext);
    const navigate = useNavigate();

    const { product, productImages, user } = article;
    const userSellerId = user?.id;

    const [stateColor, setStateColor] = useState('');
    function changeColor () {
        if (product?.state === 'Nuevo' || product?.state === 'En buen estado') {
            setStateColor('#32f569');
        }
        if (product?.state === 'Aceptable') {
            setStateColor('#eaee34');
        }
        if (product?.state === 'No da para más') {
            setStateColor('#f14444');
        }
    }

    useEffect(() => {
        changeColor();
    });

    if (loading) return <Loading/>;
    if (error) toast.error(error);

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await addOrderService(idProduct, token, { userSellerId });
            toast.success('Producto reservado, pronto recibirás una respuesta del vendedor');
        } catch (error) {
            toast.error(error.message);
        } finally {
            navigate('/user/orders');
        }
    };

    return (
        <>
            <MainHeader/>
            <main>
                { user
                    ? <>
                        <div className="see-product-container">
                            <div className='product-owner-info'>
                                <UserWithRating
                                    username={user.first_name}
                                    lastName={user.last_name}
                                    avatar={user.avatar}
                                    idUser={user.id}/>
                                <ReadOnlyRating value={product.avg_review_stars}/>
                            </div>
                            <article className='product-info-container'>
                                <SliderPhotoProduct productImages={productImages}/>
                                <div className="product-info">
                                    <h2>{product.name}</h2>
                                    <p className='product-category'>{product.category}</p>
                                    <p className='product-description'>{product.description}</p>
                                    <div className="time-state-container">
                                        <p className='user-location-time'>{user.city}, {new Date(product?.time).toLocaleString('es-ES', { month: 'short', day: '2-digit' })}</p>
                                        <p style={{ color: stateColor }}>{product.state}</p>
                                    </div>
                                    <p className='product-price'>{product.price} €</p>
                                    {
                                        token
                                            ? <MainButton text={'Comprar'} handleClick={handleClick}/>
                                            : <Link to={'/user/login'}><MainButton text={'Comprar'}/></Link>
                                    }
                                </div>
                            </article>
                        </div>
                    </>
                    : <p>No hemos encontrado el producto que buscabas</p>
                }
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;
