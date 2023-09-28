import { useLocation } from 'react-router-dom';
import useSearchProducts from '../../hooks/useSearchProducts';
import Loading from '../../components/loading/Loading';
import HomePageHeader from '../home-page/HomePageHeader';
import Footer from '../../components/footer/Footer';
import ProductItem from '../../components/product-item/ProductItem';

const SearchPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const { products, loading, error } = useSearchProducts('products/?' + params);

    if (loading) return <Loading/>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <HomePageHeader/>
            <main>
                <h1>Productos seleccionados</h1>
                {
                    products.length
                        ? <ul>
                            {products.map((product) => {
                                return <li key={product.product_id}><ProductItem product={product}/></li>;
                            })}
                        </ul>
                        : <p>No se han encontrado productos</p>
                }
            </main>
            <Footer/>
        </>
    );
};

export default SearchPage;