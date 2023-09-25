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
        <div className='password-input'>
            <label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChange} />
            </label>
            <button
                onClick={togglePasswordVisibility}
            ><img src={showPassword ? '../../public/lock.png' : '../../public/unlock.png'} alt="lock and unlock icons" /></button>
        </div>
    );
}


export default Password;
