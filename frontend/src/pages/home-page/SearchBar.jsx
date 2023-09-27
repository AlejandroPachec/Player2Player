import GeneralInput from '../../components/generalInput/GeneralInput';
import SearchCategoryItem from './SearchCategoryItem';
import searchIcon from '../../assets/search.svg';


function SearchBar () {
    const handleChange = (event) => {
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <>
            <SearchCategoryItem categoryText={'Consolas'} />
            <SearchCategoryItem categoryText={'VideoJuegos'} />
            <SearchCategoryItem categoryText={'Accesorios'} />
            <SearchCategoryItem categoryText={'Retro'} />
            <SearchCategoryItem categoryText={'Ordenadores'} />
            <form onSubmit={handleSubmit}>
                <button type='Submit'>
                    <img src={searchIcon} alt='Lupita buscar' />
                </button>
                <GeneralInput placeholder={'¿Qué es lo que buscas?'} type={'text'} value={'productName'} />
                <div>
                    <p>Entre</p>
                    <GeneralInput placeholder={'0'} type={'number'} value={'minPrice'} />
                    <p>y</p>
                    <GeneralInput placeholder={'1000'} type={'number'} value={'maxPrice'} />
                    <p>€</p>
                </div>
                <GeneralInput placeholder={'¿Dónde lo buscas?'} type={'text'} value={'productLocation'} />

            </form>
        </>
    );
}

export default SearchBar;
