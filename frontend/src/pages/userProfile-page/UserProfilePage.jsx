import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { useParams } from 'react-router-dom';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import whatsapp from '../../assets/whatsapp.svg';
import location from '../../assets/location.svg';
import Loading from '../../components/loading/Loading';
import ProductCard from './ProductCard';

const UserProfilePage = () => {
    const { idUser } = useParams();
    const { user, loading, error } = useGetUserProfile(idUser);
    const userInfo = user?.user;
    const userProducts = user?.products;

    if (loading) return <Loading/>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <MainHeader/>
            <main>
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
                            : <p>No se han encontrado productos</p>
                    }
                </section>

            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
