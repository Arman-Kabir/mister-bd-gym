import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login-container'>
            <h2 className='text-center'>Login</h2>
            <form action="">

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <br />

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
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
        </div>
    );
};

export default Login;