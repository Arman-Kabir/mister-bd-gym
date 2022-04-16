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
                    <img
                        className="d-block w-100"
                        src={aesthetic1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Mixed martial Art</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aesthetic2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Running for breathing</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={aesthetic3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Weight Training for strength</h1>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

};


export default Banner;