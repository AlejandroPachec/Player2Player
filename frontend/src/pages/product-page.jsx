import MainHeader from '../components/header-main/MainHeader';
import Footer from '../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ProductPage = () => {
    const { idProduct } = useParams();

    return (
        <>
            <MainHeader/>
            <main>

            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;
