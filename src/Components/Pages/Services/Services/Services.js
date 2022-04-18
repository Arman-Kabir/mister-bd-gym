import React, { createContext } from 'react';
import useServices from '../../../../useServices/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const services = useServices();
    // console.log(services);

    return (
        // <ServicesContext.Provider value={services}>
            <div>
                <h2 className='text-center text-info services-title'>Mister-BD-Gym Services: <span className='text-danger'>{services.length}</span> services</h2>

                <div className='container services-container'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        // </ServicesContext.Provider>
    );
};

export default Services;