import PropTypes from 'prop-types';
import './selectInput.css';

export const SelectInput = ({ Text, handleClick }) => {
    return (
        <div onClick={handleClick} className="box">
            <div className="state">
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="text-wrapper">{Text}</div>
                    <img className="chevron-down" alt="Chevron down" src="/img/chevrondown.svg" />
                </div>
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    Text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

