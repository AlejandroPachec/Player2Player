import Carousel from 'react-bootstrap/Carousel';
import SliderOne from '../../assets/slider1.webp';
import SliderTwo from '../../assets/slider2.webp';
import SliderThree from '../../assets/slider3.webp';

function UncontrolledExample () {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={SliderOne} alt="Imagen" />
                <p>¡Los CLÁSICOS nunca pasan de moda! Encuentra tus tesoros retro en nuetra tienda de juegos de segunda mano.</p>
                <button>Descubrir</button>
                <div></div>
            </Carousel.Item>
            <Carousel.Item>
                <img src={SliderTwo} alt="Imagen" />
                <p>¡Libera espacio y GANA dinero! Vende lo que no usas y dale otra vida a tus cosas.</p>
                <button>Vende ya</button>
                <div></div>
            </Carousel.Item>
            <Carousel.Item>
                <img src={SliderThree} alt="Imagen" />
                <p>¡Haz espacio para lo NUEVO y descubre ofertas emocionantes! Compra y vende entre personas de manera SENCILLA y SEGURA</p>
                <button>Compra ya</button>
                <div></div>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;
