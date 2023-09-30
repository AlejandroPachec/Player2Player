import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { useParams } from 'react-router-dom';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import whatsapp from '../../assets/whatsapp.svg';
import location from '../../assets/location.svg';
import Loading from '../../components/loading/Loading';
import ProductCard from './ProductCard';
import { BsPlusLg } from 'react-icons/bs';
import doubleCheck from '../../assets/Vector.svg';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import emailIcon from '../../assets/emailIcon.svg';

const UserProfilePage = () => {
    const { idUser } = useParams();
    const { user, loading, error, userReviews } = useGetUserProfile(idUser);
    const reviews = userReviews.userReviews;
    const userInfo = user?.user;
    const bio = userInfo.bio;
    const ratingsNumber = reviews?.length;
    const userProducts = user?.products;
    const sellingItems = userProducts?.filter((product) => product.availability === 1).length;

    console.log(userProducts);
    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader/>
            <main>
                <nav>
                    <a>
                        <span>{sellingItems}</span>
                        <p>En venta</p>
                    </a>
                    <a>
                        <span>{ratingsNumber}</span>
                        <p>Valoraciones</p>
                    </a>
                    <a>
                        <span>
                            <BsPlusLg/>
                        </span>
                        <p>Información</p>
                    </a>
                </nav>
                <div>

                    { userInfo
                        ? <>
                            <UserWithRating
                                username={userInfo.first_name}
                                lastName={userInfo.last_name}
                                avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${userInfo.avatar}`}
                                idUser={userInfo.id}/>
                            <p>
                                <img src={whatsapp} alt="Icono de whatsapp" />
                                Whatsapp
                            </p>
                            <p>
                                <img src={location} alt="Icono maps" />
                                {userInfo?.city}, {userInfo?.postal_code}
                            </p>
                        </>
                        : <p>No se ha encontrado al usuario</p>
                    }
                </div>
                <section>
                    {
                        userProducts
                            ? <ul>
                                {userProducts.filter((product) => product.availability === 1).map((product) => {
                                    return <li key={product.id}><ProductCard product={product}/></li>;
                                })}
                            </ul>
                            : <p>Producto no encontrado</p>

                    }
                    {
                        reviews
                            ? (<ul>
                                {reviews.map((review) => {
                                    return <li key={review.product_id}>
                                        <img src={`${import.meta.env.VITE_BACK_URL}/uploads/${review.product_images}`} alt="Foto del producto" />
                                        <div>
                                            <span>Por {review.first_name}{review.last_name} el </span>
                                            <span>{new Date(review.created_at).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: '2-digit' })}</span>
                                        </div>
                                        <p>{review.title}</p>
                                        <p>{review.text}</p>
                                        <ReadOnlyRating name="half-rating-read" value={parseInt(review.stars)} precision={0.5} readOnly />
                                    </li>;
                                })}
                            </ul>)
                            : <p>El usuario no tiene reviews</p>
                    }

                    {
                        bio
                            ? <article>
                                <h2>Descripción</h2>
                                <p>{bio}</p>
                            </article>
                            : <article>
                                <h2>Descripción</h2>
                                <p>¡Fantástico! ¡Como todos nuestros usuarios! </p>
                            </article>
                    }


                    { userInfo
                        ? <article>
                            <h2>Información verificada</h2>
                            <img src={whatsapp} alt="Icono de whatsapp" />
                            <span>Whatsapp</span>
                            <img src={doubleCheck} alt="Icono de doble check" />
                            <img src={emailIcon} alt="Icono de email" />
                            <span>Email</span>
                            <img src={doubleCheck} alt="Icono de doble check" />
                        </article>
                        : <p>No se ha encontrado al usuario</p>
                    }


                </section>

            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
