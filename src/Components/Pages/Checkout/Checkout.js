import React from 'react';
import { useParams } from 'react-router-dom';


const Checkout = () => {
    const params = useParams();
    const { cId } = params;

    return (
        <div>
            <h2 className='text-center'>Checkout Page.{cId}</h2>
        </div>
    );
};

export default Checkout;