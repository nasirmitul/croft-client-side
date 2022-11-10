import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Spinner from '../Spinner/Spinner';
import Service from './Service';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    const { loading } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://croft-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    if (loading) {
        return <Spinner></Spinner>
    }

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