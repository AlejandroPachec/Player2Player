import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useGetProduct from '../../hooks/useGetProduct'

const ProductPage = () => {
    const { idProduct } = useParams();
    const { data, error } = useGetProduct(idProduct);
    // const { product, user, productImages } = data;


    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <MainHeader/>
            <main>
                <figure>
                    <img></img>
                    <figcaption>
                        {/* <p>{user.first_name} {user.last_name[0]}.</p> */}
                    </figcaption>
                </figure>

            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;
