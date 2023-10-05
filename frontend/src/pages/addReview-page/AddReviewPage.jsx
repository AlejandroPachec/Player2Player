import MainHeader from '../../components/header-main/MainHeader';
import Footer from '../../components/footer/Footer';
import UserWithRating from '../../components/user-with-rating/UserWithRating';
import ReadOnlyRating from '../../components/readOnly-rating/ReadOnlyRating';
import GeneralInput from '../../components/generalInput/GeneralInput';
import TextArea from '../../components/text-area/TextArea';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';
import MainButton from '../../components/main-button/MainButton';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const AddReviewPage = () => {
    return (
        <>
            <MainHeader/>
            <main>
                <h1>¿Cómo ha sido tu experiencia</h1>
                <section>
                    <UserWithRating/>
                    <ReadOnlyRating/>
                    <img src="{}" alt="Foto del producto" />
                </section>
                <section>
                    <GeneralInput type={'text'} placeholder={'Título'} value={'title'} handleChange={'handleChange'}/>
                    <Box
                        sx={{
                            '& > legend': { mt: 2 }
                        }}
                    >
                        <Rating
                            name="simple-controlled"
                            // value={value}
                            // onChange={(event, newValue) => {
                            //     setValue(newValue);
                            // }}
                        />
                    </Box>
                    <TextArea placeholder={'Añade aquí la valoración de tu experiencia'} value={'text'} handleChange={'handleChange'}/>
                    <Link to={'/user/orders'}>
                        <SecondaryButton text={'Cancelar'}/>
                    </Link>
                    <MainButton text={'Enviar'}/>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default AddReviewPage;
