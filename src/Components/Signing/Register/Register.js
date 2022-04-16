import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

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
        navigate('/');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='login-container'>
            <h2 className='text-center'>Register</h2>
            <form action="" onSubmit={handleRegister}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" />
                </div>
                <br />

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
                        onClick={() => navigate('/login')}
                    >Already Registered? Go to Login </span>
                </div>
                <br />

                <div className="form-group submit-btn">
                    <button className='bg-primary border-0 text-white p-2'

                    >Register</button>
                </div>

            </form>
        </div>
    );
};

export default Register;