import PropTypes from 'prop-types';
import './password.css';
import { useState } from 'react';
import openEye from '../../assets/openEye.svg';
import closedEye from '../../assets/closeEye.svg';

function Password ({ value, handleChange }) {
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility () {
        setShowPassword(!showPassword);
    }


    return (

        <label>
            <input
                type={showPassword ? 'text' : 'password'}
                className='password'
                placeholder='Contraseña'
                name={value}
                id={value}
                onChange={handleChange}
                autoComplete='current-password'/>
            <button
                type='button'
                className='eye-button'
                onClick={togglePasswordVisibility}
            ><img src={showPassword ? closedEye : openEye} alt="lock and unlock icons" /></button>
        </label>

    );
}

Password.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default Password;
