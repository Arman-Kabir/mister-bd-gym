import React from 'react';
import useServices from '../../../../useServices/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = useServices();
    console.log(services);

    return (
        <div>
            <h2 className='text-center'>Mister BD Gym's Services: <span className='text-info'>{services.length}</span> services</h2>

            <div className='container services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;