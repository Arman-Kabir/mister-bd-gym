import React from 'react';
import './Instructions.css';
import PXL from '../../../../images/PXL.jpg'
import { Link } from 'react-router-dom';

const Instructions = () => {
    return (
        <div className='instructions-container container'>
            <h2 className='text-center text-primary fw-bold'>Meet The Instructor</h2>

            <div className='instructions-box'>
                <div className='instructions-image'>
                    <img src={PXL} alt="" />
                </div>
                <div className='instructions-info'>
                    <h3 className=''>Meet <span className='text-info fw-bold fs-3'>Arman Kabir</span> </h3>

                    <p><span className='text-danger fw-bold'>10 Years</span> Bodybuilding Experiences. <br />
                        <span className='fw-bold text-success my-0'>Member of Mr.Bangladesh Competition Organization</span></p>
                     <p className='text-muted fs-5'>Hi Dear, You already got my name. If you are suffering in your real life for obesity, thin body, unhealthy lifestyle, extra fat in belly or thighs or hips or chest , breathing problem and all other problems that happens due to inactivity or lazy lifestyle and U want to change that then you have come to the right place.</p>
                     <p className='text-muted fs-5'>For the last 10 years i have been practicing and learning different formulas of bodybuilding as well as invented some new techniques(myStyles) and instructed more than 1000 young bodybuilders.Now Get ready.It's your turn.</p>
                     <button className='border-0 bg-warning p-2 text-black rounded fw-bold'>
                        <Link className='text-decoration-none' to='/about'>See More</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Instructions;