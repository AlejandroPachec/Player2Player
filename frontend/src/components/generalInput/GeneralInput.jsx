import PropTypes from 'prop-types';

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
    handleChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default GeneralInput;
