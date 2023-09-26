import './cancelButton.css';

import PropTypes from 'prop-types';

export const CancelButton = ({ handleClick, text }) => {
    return (
        <div className="cancel">
            <div className="text-wrapper" onClick={handleClick}>{text}</div>
        </div>
    );
};

CancelButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};


export default CancelButton;
