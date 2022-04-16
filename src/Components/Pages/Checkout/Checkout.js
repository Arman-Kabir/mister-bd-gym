import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const params = useParams();
    const { serviceId } = params;
    return (
        <div>
            <h2 className='text-center'>Checkout Page.{serviceId}</h2>
        </div>
    );
};

export default Checkout;