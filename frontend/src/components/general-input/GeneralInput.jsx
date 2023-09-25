import PropTypes from 'prop-types';
import './generalInput.css';

function GeneralInput ({ placeholder, value, handleChange }) {
    return (
        <label>
            <input
                type='text'
                className='generalInput'
                placeholder={placeholder}
                value={value}
                onChange={handleChange}/>
        </label>
    );
}

GeneralInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default GeneralInput;
