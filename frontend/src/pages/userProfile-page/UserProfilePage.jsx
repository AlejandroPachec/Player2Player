import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserAuthContext } from '../../context/UserAuthContext';
import UserWithRating from '../../components/user-with-rating/UserWithRating';


const UserProfilePage = () => {
    const [errorBack, setErrorBack] = useState(false);
    const { token } = useContext(UserAuthContext);
    const navigate = useNavigate();

    const handleClick = async () => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    };

    return (
        <>
            <MainHeader/>
            <UserWithRating/>
            <Footer/>
        </>
    );
};

export default UserProfilePage;
