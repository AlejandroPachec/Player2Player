import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import whatsapp from '../../assets/whatsapp.svg';
import location from '../../assets/location.svg';
import Loading from '../../components/loading/Loading';
import ProductCard from './ProductCard';
import { BsPlusLg } from 'react-icons/bs';
import doubleCheck from '../../assets/Vector.svg';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import emailIcon from '../../assets/emailIcon.svg';
import { useState } from 'react';
import './UserProfilePage.css';
import { toast } from 'react-toastify';

const UserProfilePage = () => {
    const { idUser } = useParams();
    const { user, loading, error, userReviews } = useGetUserProfile(idUser);
    const reviews = userReviews?.userReviews;
    const userInfo = user?.user;
    const bio = userInfo?.bio;
    const ratingsNumber = reviews?.length;
    const userProducts = user?.products;
    const sellingItems = userProducts?.filter((product) => product.availability === 1).length;
    const [clicState, setClic] = useState('sell');
    const navigate = useNavigate();

    if (loading) return <Loading />;
    if (error) {
        navigate('/');
        return toast.error(error);
    }

    return (
        <>
            <MainHeader />
            <main className='main-profile-page'>
                {userInfo
                    ? <div className='user-info-profile'>
                        <UserWithRating
                            username={userInfo.first_name}
                            lastName={userInfo.last_name}
                            avatar={userInfo.avatar}
                            idUser={idUser} />
                        <ReadOnlyRating value={user.avgReview?.userAvgReviews} precision={0.5} readOnly />
                        <div className='tel-location-container'>
                            <p>
                                <a href={`tel:${userInfo.phone_number}`}>
                                    <img src={whatsapp} alt="Icono de whatsapp" className='icon-profile' />Whatsapp
                                </a>
                            </p>
                            <p>
                                <img src={location} alt="Icono maps" className='icon-profile' />
                                {userInfo.city}, {userInfo.postal_code}
                            </p>
                        </div>
                    </div>
                    : clicState === 'information'
                        ? <p>No se ha encontrado al usuario</p>
                        : null
                }
                {
                    <nav className='profileMenu'>
                        <a onClick={() => { setClic('sell'); }}>
                            <span>{sellingItems}</span>
                            <p>En venta</p>
                        </a>
                        <a onClick={() => { setClic('rate'); }} >
                            <span>{ratingsNumber}</span>
                            <p>Valoraciones</p>
                        </a>
                        <a onClick={() => { setClic('information'); }}>
                            <span>
                                <BsPlusLg />
                            </span>
                            <p>Información</p>
                        </a>
                    </nav>
                }
                <div className='profile-sections-wrapper'>
                    {
                        userProducts && clicState === 'sell' && sellingItems !== 0
                            ? <section>
                                <ul id='productsOnSale'>
                                    {userProducts.filter((product) => product.availability === 1).map((product) => {
                                        return <li key={product.id}>
                                            <Link to={`/product/${product.id}`}>
                                                <ProductCard product={product} />
                                            </Link>
                                        </li>;
                                    })}
                                </ul>
                            </section>
                            : clicState === 'sell'
                                ? <p>Todavía no vendes ningún producto</p>
                                : null
                    }

                    {
                        reviews && clicState === 'rate'
                            ? <section>
                                <ul id='userReviews'>
                                    {reviews.map((review) => {
                                        return <li key={review.product_id}>
                                            <div className='userReview-info-container'>
                                                <div className='userReviews-img-container'>
                                                    <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${review.product_images}`} alt="Foto del producto" />
                                                </div>
                                                <p>{review.title}</p>
                                                <div>
                                                    <span>Por {review.first_name} {review.last_name} el </span>
                                                    <p>{review.text}</p>
                                                    <span>{new Date(review.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
                                                </div>
                                                <ReadOnlyRating value={parseInt(review.stars)} />
                                            </div>
                                        </li>;
                                    })}
                                </ul>
                            </section>
                            : clicState === 'rate'
                                ? <p>El usuario no tiene reviews</p>
                                : null
                    }

                    <section className='more-info-profile-section'>
                        {
                            clicState === 'information' && userInfo && userInfo.bio

                                ? <>
                                    <article>
                                        <h2>Descripción</h2>
                                        <div className='bio-frame'>
                                            <p className='text-wrapper-bio'>{bio}</p>
                                        </div>
                                    </article>
                                </>
                                : clicState === 'information'
                                    ? (<article>
                                        <div className='bio-frame'>
                                            <h2>Descripción</h2>
                                            <p className='text-wrapper-bio'>
                                                {userInfo.first_name} aún no ha proporcionado una biografía.</p>
                                        </div>
                                    </article>)
                                    : null
                        }

                    </section>


                    {userInfo && clicState === 'information'
                        ? <section className='bio-frame'>
                            <article className='verified-user-data'>
                                <h2>Información verificada</h2>
                                <div className='profile-verified-user-data-wrapper'>
                                    <img src={whatsapp} alt="Icono de whatsapp" />
                                    <span>Whatsapp</span>
                                    <img src={doubleCheck} alt="Icono de doble check" />
                                </div>
                                <div className='profile-verified-user-data-wrapper'>
                                    <img src={emailIcon} alt="Icono de email" />
                                    <span>Email</span>
                                    <img src={doubleCheck} alt="Icono de doble check" />
                                </div>
                            </article>
                        </section>
                        : clicState === 'information'
                            ? <p>No se ha encontrado al usuario</p>
                            : null
                    }
                </div>
            </main>
            <Footer />
        </>
    );
};

export default UserProfilePage;
