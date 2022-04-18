import React from 'react';
import Services from '../../Services/Services/Services';

import Banner from '../Banner/Banner';
import Instructions from '../Instructions/Instructions';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Instructions></Instructions>
        </div>
    );
};

export default Home;