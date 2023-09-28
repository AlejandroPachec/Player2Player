import PropTypes from 'prop-types';
import './generalInput.css';
function GeneralInput ({ placeholder, value, type, handleChange }) {
    return (
        <label>
            <input
                type={type}
                placeholder={placeholder}
                name={value}
                id={value}
                onChange={handleChange}/>
        </label>
    );
}

GeneralInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default GeneralInput;
