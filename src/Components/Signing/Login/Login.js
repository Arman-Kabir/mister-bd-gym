import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleBlurEmail = event => {
        setEmail(event.target.value);
        // console.log(email);
    }

    const handleBlurPassword = event => {
        setPassword(event.target.value);
        // console.log(password);
    }

    if (user) {
        console.log(user, 'user found');
        // navigate('/');
        navigate(from, { replace: true });
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(email, password);
        await signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='login-container'>
            <h2 className='text-center'>Login</h2>
            <form action="" onSubmit={handleLogin}>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" onBlur={handleBlurEmail} />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" onBlur={handleBlurPassword} />
                </div>
                <br />

                <div className="form-group">
                    {/* <input type="checkbox" name="checkbox" id="" /> */}
                    <span className='text-primary ps-3 text-cl'
                        onClick={() => navigate('/register')}
                    >New User? Go to Register </span>
                </div>
                <br />

                <div className="form-group submit-btn">
                    <button className='bg-primary border-0 text-white p-2'

                    >Login</button>
                </div>

            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;