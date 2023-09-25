import './password.css';
import { useState } from 'react';

function Password () {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function togglePasswordVisibility () {
        setShowPassword(!showPassword);
    }

    function handleChange (e) {
        setPassword(e.target.value);
    }

    return (

        <label>
            <input
                type={showPassword ? 'text' : 'password'}
                className='password'
                placeholder='Password'
                value={password}
                onChange={handleChange} />
            <button
                className='eye-button'
                onClick={togglePasswordVisibility}
            ><img src={showPassword ? '../../public/MdiEyeOffOutline.svg' : '../../public/MdiEyeOutline.svg'} alt="lock and unlock icons" /></button>
        </label>

    );
}


export default Password;
