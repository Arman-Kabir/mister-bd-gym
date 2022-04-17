import React from 'react';
import { useNavigate } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';
import './Service.css';

const Service = ({ service }) => {
    const navigate = useNavigate();
    const { id, name, price, description, image } = service;

    const handleService = id => {
        navigate(`/checkout/${id}`);
        // <Checkout
        // key={service.id}
        // service={service}
        // ></Checkout>
    }

    return (
        <div className='service-container'>
            <h3 className='text-center'>{name}</h3>


            <div className='image-container'>
                <img src={image} alt="" />
            </div>


            <p className='p-2 text-justify'>{description}</p>

            <div className='d-flex justify-content-around align-items-center'>
                <span className='fw-bold text-info'>{price}</span>
                <button className='bg-warning border-0 rounded' onClick={() => handleService(id)}>
                    See Details</button>
            </div>

        </div>
    );
};

export default Service;