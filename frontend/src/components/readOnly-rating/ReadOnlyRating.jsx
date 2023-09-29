import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

const ReadOnlyRating = ({ value }) => {
    return (
        <Rating name="read-only" value={value} readOnly />
    );
};

ReadOnlyRating.propTypes = {
    value: PropTypes.number.isRequired
};

export default ReadOnlyRating;
