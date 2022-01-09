import React, {useState} from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const signIn = e => {
    e.preventDefault();

    //Firebase login 

}
const register = e => {
    e.preventDefault();

    //Firebase register

}

    return (
        
        <div className="login">
            <Link to="/">
                <img className='brand-logo' src="https://m.media-amazon.com/images/G/01/sell/images/logo-amazon-white.svg" className="logo" />
            </Link>

            <div className='login-container'>
                <form>
                    <div className='form-container'>
                        <h1>Sign-In</h1>
                        <label>Email or mobile phone number</label>
                        <input type="text" value={email} onChange=
                            {e => setEmail(e.target.value)} />

                        <label>Password</label>
                        <input type="password" value={password} onChange=
                            {e => setPassword(e.target.value)} />
                            
                        <button type="submit" onClick={signIn} className="primary-btn">Continue</button>

                        <small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small>
                        
                        <Link to=''>
                            <span>Need Help</span>
                        </Link>
                    </div>

                    <div className='create-new-account'>
                        <small>New to Amazon</small>
                        <button onClick={register} className='secondary-btn'>Create your Amazon account</button>
                    </div>
                </form>
            </div>

            <footer className='login-footer'>
                <ul className="inline-list">
                    <li>Condition of Use</li>
                    <li>Privacy Notice</li>
                    <li>Help</li>
                </ul>
                <span className='copyright'>
                    © 1996-2022, Amazon.com, Inc. or its affiliates
                </span>
            </footer>

        </div>
    )
}

export default Login