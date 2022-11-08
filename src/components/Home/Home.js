import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';
import Banner from './Banner';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <Banner></Banner>

            <div className="our-services">
                <h2>Our Services</h2>
                <div className="services">
                    {
                        services.map(service => <Service
                        service={service}
                        key={service._id}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;