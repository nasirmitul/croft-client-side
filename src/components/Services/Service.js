import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const Service = ({service}) => {

    const {serviceImage, serviceName, serviceDescription, servicePrice, serviceRatings} = service;
    return (
        <div>
            <div className='service'>
                <div className="service-img">
                    <img src={serviceImage} alt="" />
                </div>
                <p className="service-name">{serviceName}</p>
                <p className="service-description">
                    {serviceDescription.slice(0, 100)} <span>... read more</span>
                </p>

                <div className="price-rating">
                    <p className="price">Price{servicePrice}$</p>
                    <p className="ratings">{serviceRatings}<AiFillStar /></p>
                </div>
            </div>
        </div>
    );
};

export default Service;