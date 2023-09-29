import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const ReadOnlyRating = ({ value }) => {
    return (
        <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
    );
};

ReadOnlyRating.propTypes = {
    value: PropTypes.number
};

export default ReadOnlyRating;
