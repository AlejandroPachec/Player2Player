import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import useGetUserProfile from '../../hooks/useGetUserProfile';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import whatsapp from '../../assets/whatsapp.svg';
import location from '../../assets/location.svg';
import ProductItem from '../../components/product-item/ProductItem';


const UserProfilePage = () => {
    const navigate = useNavigate();
    const idUser = useParams();
    const { user, error, loading } = useGetUserProfile(idUser);
    const userInfo = user?.user;
    const userProducts = user?.products;
    console.log(userInfo);
    const handleClick = async () => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    return (
        <>
            <MainHeader/>

            <main>
                <div>
                    <UserWithRating
                        username={userInfo?.first_name}
                        lastName={userInfo?.last_name}
                        avatar={`${import.meta.env.VITE_BACK_URL}/uploads/${userInfo?.avatar}`}
                        idUser={userInfo?.id}/>
                    <p>
                        <img src={whatsapp} alt="Icono de whatsapp" />
                        Whatsapp
                    </p>
                    <p>
                        <img src={location} alt="Icono maps" />
                        {userInfo?.city}, {userInfo?.postal_code}
                    </p>
                </div>
                <section>
                    <ul>
                        {
                            userProducts.filter((product) => userProducts.availability === 1).map((product) => (
                                <li key={product.description}>
                                    <ProductItem product={product} />
                                </li>
                            ))
                        }
                    </ul>
                </section>

            </main>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
