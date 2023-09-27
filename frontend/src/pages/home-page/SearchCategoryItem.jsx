import PropTypes from 'prop-types';

const SearchCategoryItem = ({ categoryText }) => {
    return (
        <button>
            <img src={`src/assets/${categoryText}.svg`} alt={categoryText} />
            <p>{categoryText}</p>
        </button>
    );
};

SearchCategoryItem.propTypes = {
    categoryText: PropTypes.string.isRequired
};

export default SearchCategoryItem;
