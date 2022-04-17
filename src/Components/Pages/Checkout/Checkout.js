import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServicesContext } from '../../../App';
import './Checkout.css';

const Checkout = () => {
    // const [totalServices, setTotalServices] = useState([]);

    const services = useContext(ServicesContext);

    // if (services) {
    //     setTotalServices(services);
    // }
    // console.log(totalServices);

    const { checkoutId } = useParams();


    const checkoutService = services.find(service => service.id === checkoutId);
    console.log(checkoutService);
    // const {id,} = checkoutService;

    return (
        <div className='checkout-container container'>
            <div>
                <h1 className='text-center fw-bold text-warning'>Checkout Page.</h1>
                <p className='text-center'>Total Services: {services.length}</p>
                <p className='text-center fs-4 fw-bold'>Checkout Id of checkout: {checkoutId}</p>
            </div>

            <div className='checkout-details border-1 my-5'>
                <div className='checkout-image d-flex justify-content-center align-items-center '>
                    <img className='w-50 rounded' style={{ height: '300px' }} src={checkoutService?.image} alt="" />
                </div>
                <div className='checkout-info d-flex flex-column justify-content-center'>
                    <h2> <span className='fw-bold text-info'>Name:</span>  {checkoutService?.name}</h2>
                    <p><span className='fw-bold text-info'>Price:</span> {checkoutService?.price}</p>

                    <p><span className='fw-bold text-info'>Description:</span> {checkoutService?.description}</p>
                </div>
            </div>
            <div>
                <h4 className='text-danger text-center'>Checkout Information disappear after i reload this page.</h4>
                <p className='text-muted text-center fs-5'>Searched for everything what i could think . Tried useEffect,context Api to keep the data after a reload however nothing worked out. Then i found only one solution - that is to use localStorage. Due to the shortage of time and other pending works- i couldn't implement that. But i will do it later.</p>
            </div>
        </div>
    );
};

export default Checkout;