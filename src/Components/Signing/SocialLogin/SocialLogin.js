import React from 'react';
import './SocialLogin.css';
import google from '../../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user, 'google signed IN');
        navigate('/services');
    }

    return (
        <div>
            <div className='divider'>
                <div className='left-divider'></div>
                <p>or</p>
                <div className='right-divider'></div>
            </div>

            <button onClick={() => signInWithGoogle()} className='google-signin d-block mx-auto border-0' >
                <img src={google} alt="" />
                <span className=''>SignInWithGoogle</span>
            </button>
        </div>
    );
};

export default SocialLogin;