import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { useParams, useNavigate } from 'react-router-dom';
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

    if (loading) return <Loading/>;
    if (error) {
        navigate('/');
        return toast.error(error);
    }

    return (
        <>
            <MainHeader/>
            <main>
                {
                    <nav className='profileMenu'>
                        <a onClick = { () => { setClic('sell'); } }>
                            <span>{sellingItems}</span>
                            <p>En venta</p>
                        </a>
                        <a onClick = { () => { setClic('rate'); } } >
                            <span>{ratingsNumber}</span>
                            <p>Valoraciones</p>
                        </a>
                        <a onClick = { () => { setClic('information'); }}>
                            <span>
                                <BsPlusLg/>
                            </span>
                            <p>Información</p>
                        </a>
                    </nav>
                }
                { userInfo
                    ? <div>
                        <UserWithRating
                            username={userInfo.first_name}
                            lastName={userInfo.last_name}
                            avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${userInfo.avatar}`}
                            idUser={idUser}/>
                        <ReadOnlyRating value={user.avgReview?.userAvgReviews} precision={0.5} readOnly/>
                        <p>
                            <a href={`tel:${userInfo.phone_number}`}>
                                <img src={whatsapp} alt="Icono de whatsapp" />Whatsapp
                            </a>
                        </p>
                        <p>
                            <img src={location} alt="Icono maps" />
                            {userInfo.city}, {userInfo.postal_code}
                        </p>
                    </div>
                    : clicState === 'information'
                        ? <p>No se ha encontrado al usuario</p>
                        : null
                }
                <section>
                    {
                        userProducts && clicState === 'sell' && sellingItems !== 0
                            ? <ul id='productsOnSale'>
                                {userProducts.filter((product) => product.availability === 1).map((product) => {
                                    return <li key={product.id}><ProductCard product={product}/></li>;
                                })}
                            </ul>
                            : clicState === 'sell'
                                ? <p>No tienes productos en venta</p>
                                : null
                    }

                    {
                        reviews && clicState === 'rate'
                            ? <ul id='userReviews'>
                                {reviews.map((review) => {
                                    return <li key={review.product_id}>
                                        <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${review.product_images}`} alt="Foto del producto" />
                                        <div>
                                            <span>Por {review.first_name} {review.last_name} el </span>
                                            <span>{new Date(review.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
                                        </div>
                                        <p>{review.title}</p>
                                        <p>{review.text}</p>
                                        <ReadOnlyRating value={parseInt(review.stars)}/>
                                    </li>;
                                })}
                            </ul>
                            : clicState === 'rate'
                                ? <p>El usuario no tiene reviews</p>
                                : null
                    }

                    { clicState === 'information' && userInfo && userInfo.bio
                        ? (<article>
                            <h2>Descripción</h2>
                            <p>{bio}</p>
                        </article>)
                        : clicState === 'information'
                            ? (
                                <article>
                                    <h2>Descripción</h2>
                                    <p>¡Fantástico! ¡Como todos nuestros usuarios! </p>
                                </article>
                            )
                            : null
                    }

                    { userInfo && clicState === 'information'
                        ? <article>
                            <h2>Información verificada</h2>
                            <img src={whatsapp} alt="Icono de whatsapp" />
                            <span>Whatsapp</span>
                            <img src={doubleCheck} alt="Icono de doble check" />
                            <img src={emailIcon} alt="Icono de email" />
                            <span>Email</span>
                            <img src={doubleCheck} alt="Icono de doble check" />
                        </article>
                        : clicState === 'information'
                            ? <p>No se ha encontrado al usuario</p>
                            : null
                    }
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
