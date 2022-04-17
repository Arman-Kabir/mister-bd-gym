import React from 'react';
import './About.css';
import myImage from '../../../images/myImage.jpg';

const About = () => {
    return (
        <div>
            <h2 className='text-center my-5 text-success'>About Me Page</h2>
            <div className='about-container container my-3'>
                <div>
                    <div className='my-image'>
                        <img src={myImage} alt="" />
                    </div>
                    <div className='my-info'>
                        <p>I am <span className='fw-bold fs-3 text-warning'>Arman Kabir</span> </p>
                        <p className='text-muted'>armankabir8@gmail.com</p>
                        <p className='text-muted'>Phone: 0000-0000</p>
                    </div>
                </div>
                <div className='my-goal text-muted fs-5'>
                    <p className=''>My goal is to become an expert web developer and earn a handsome amount of money in legal ways. <br /><hr />

                    I am working hard since january 2022 under the guidance of programming hero team and learning new topics everyday. And I will continue this hard work till the end of this course<br /><hr />

                    I am watching module video everyday and practicing everyday and keeping no tasks undone.Sometimes it becomes very hard to follow the deadline however i give my best at learning from this course.
    
                    </p>
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default About;