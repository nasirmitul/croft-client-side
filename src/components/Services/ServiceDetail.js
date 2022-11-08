import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData();
    return (
        <div className='container'>
            <div className="page-heading">
                <p>{serviceDetail.serviceName}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;