import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import aesthetic1 from '../../../../images/mma.jpg';
import aesthetic2 from '../../../../images/running.jpg';
import aesthetic3 from '../../../../images/weightTraining.jpg';

import './Banner.module.css';



const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }


    return (
        <div className='carousel-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{ opacity: '.9' }}
                        className="d-block w-100"
                        src={aesthetic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='fw-bold text-danger shadow-lg'>Mixed martial Art</h1>
                        <p className='fw-bold text-danger shadow-lg fs-5'>Learn MMA, be fit,strong, and grow confidence </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ opacity: '.9' }}
                        className="d-block w-100"
                        src={aesthetic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='fw-bold text-danger shadow-lg'>Running for breathing</h1>
                        <p className='fw-bold text-danger shadow-lg fs-5'>Running is One of the best to enhance breathing capability</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ opacity: '.9' }}
                        className="d-block w-100"
                        src={aesthetic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='fw-bold text-danger shadow-lg'>Weight Training for strength</h1>
                        <p className='fw-bold text-danger shadow-lg  fs-5'>
                            Weight Training build your muscle and increase strength
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};


export default Banner;