import React from 'react';
import { useParams } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';

const ServiceDetail = () => {
    const params = useParams();
    const { serviceId } = params;

    return <Checkout></Checkout>
};

export default ServiceDetail;