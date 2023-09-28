import HeaderSecond from '../../components/header-second/HeaderSecond';
import Footer from '../../components/footer/Footer';
import MainButton from '../../components/main-button/MainButton';
import gameOverImage from '../../assets/space.webp';
import { useNavigate } from 'react-router-dom';
const NotFoundPage = () => {
    const navigate = useNavigate();

    function handleClick () {
        navigate('/');
    }

    return (
        <>
            <HeaderSecond />
            <main>
                <img src={gameOverImage} alt="Imagen de Game Over" />
                <h1>GAME OVER</h1>
                <h2>PUNTUACIÓN 404</h2>
                <p>¡Más suerte la próxima vez!</p>
                <MainButton text={'Volver a cargar'} handleClick={handleClick}/>
            </main>
            <Footer />
        </>
    );
};

export default NotFoundPage;
