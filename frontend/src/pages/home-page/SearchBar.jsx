import SearchCategoryItem from './SearchCategoryItem';

function SearchBar () {
    return (
        <>
            <SearchCategoryItem categoryText={'Consolas'} />
            <SearchCategoryItem categoryText={'VideoJuegos'} />
            <SearchCategoryItem categoryText={'Accesorios'} />
            <SearchCategoryItem categoryText={'Retro'} />
            <SearchCategoryItem categoryText={'Ordenadores'} />
        </>
    );
}

export default SearchBar;
