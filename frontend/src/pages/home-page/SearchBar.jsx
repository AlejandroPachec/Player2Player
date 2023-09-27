import GeneralInput from '../../components/generalInput/GeneralInput';
import SearchCategoryItem from './SearchCategoryItem';
import searchIcon from '../../assets/search.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar () {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        productName: '',
        minPrice: '',
        maxPrice: '',
        productLocation: ''
    });

    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        const newFormValue = event.target.value;

        setFormValues({
            ...formValues,
            [event.target.name]: newFormValue
        });
    };

    const params = [];

    const handleSubmit = (event) => {
        event.preventDefault();

        const queryParams = new URLSearchParams();

        if (formValues.productName !== '') {
            queryParams.set('name', formValues.productName);
        }

        if (formValues.productLocation !== '') {
            queryParams.set('city', formValues.productLocation);
        }

        if (formValues.minPrice !== '' & formValues.maxPrice !== '') {
            queryParams.set('price', `${formValues.minPrice}-${formValues.maxPrice}`);
        }

        if (category !== '') {
            queryParams.set('category', category);
        }

        params.push(`products/?${queryParams.toString()}`);

        navigate(params.toString());


        /*         const loadSearchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:5002/${params}`);

                const data = await response.json();
                console.log(data.data);
                return data.data;
            } catch (error) {
                throw new Error(error.message);
            }
        };

        loadSearchProducts(); */
    };
    return (
        <>
            <SearchCategoryItem categoryText={'Consolas'} onClick={setCategory}/>
            <SearchCategoryItem categoryText={'VideoJuegos'} onClick={setCategory}/>
            <SearchCategoryItem categoryText={'Accesorios'} onClick={setCategory}/>
            <SearchCategoryItem categoryText={'Retro'} onClick={setCategory}/>
            <SearchCategoryItem categoryText={'Ordenadores'} onClick={setCategory}/>
            <form onSubmit={handleSubmit}>
                <button type='submit'>
                    <img src={searchIcon} alt='Lupita buscar' />
                </button>
                <GeneralInput placeholder={'¿Qué es lo que buscas?'} type={'text'} value={'productName'} handleChange={handleChange}/>
                <div>
                    <p>Entre</p>
                    <GeneralInput placeholder={'0'} type={'number'} value={'minPrice'} handleChange={handleChange}/>
                    <p>y</p>
                    <GeneralInput placeholder={'1000'} type={'number'} value={'maxPrice'} handleChange={handleChange} />
                    <p>€</p>
                </div>
                <GeneralInput placeholder={'¿Dónde lo buscas?'} type={'text'} value={'productLocation'} handleChange={handleChange} />
            </form>
        </>
    );
}

export default SearchBar;
