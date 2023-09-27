import HomePageHeader from '../home-page/HomePageHeader';
import Footer from '../../components/footer/Footer';
import ProductsList from '../home-page/ProductsList';

const SearchPage = () => {
    return (
        <>
            <HomePageHeader/>
            <main>
                <ProductsList/>
            </main>
            <Footer/>
        </>
    );
};

export default SearchPage;
