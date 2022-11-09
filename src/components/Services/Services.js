import React, { useEffect, useState } from 'react';
import Service from './Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container'>

            <div className="page-heading">
                <p>Our All Services</p>
            </div>

            <div className="services">
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                    ></Service>).reverse()
                }
            </div>
        </div>
    );
};

export default Services;