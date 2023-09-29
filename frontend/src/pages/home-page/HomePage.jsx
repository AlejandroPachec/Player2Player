import HomePageHeader from './HomePageHeader';
import Slider from './Slider';
import ProductsList from './ProductsList';
import Footer from '../../components/footer/Footer';


function HomePage () {
    return (
        <>
            <HomePageHeader />
            <main>
                <section>
                    <h1>Juega más, paga menos</h1>
                    <Slider />
                </section>
                <section>
                    <h2>Lo mejor, al mejor precio</h2>
                    <ProductsList />
                </section>
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
