import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, serviceImage, serviceName, serviceDescription, servicePrice, serviceRatings } = service;
    return (
        <div>
            <div className='service'>
                <div className="service-img">
                    <img src={serviceImage} alt="" />
                </div>
                <p className="service-name">{serviceName}</p>
                <p className="service-description">
                    {serviceDescription.slice(0, 100)} <Link className='see-more' to={`/service/service-detail/${_id}`}>... read more</Link>
                </p>

                <div className="price-rating">
                    <p className="price"><span>Price: </span>{servicePrice}$</p>
                    <p className="ratings">
                        <span>{serviceRatings}</span>
                        <AiFillStar className='star'></AiFillStar>
                    </p>
                </div>

                <div className="service-detail-button">
                    <Link to={`/service/service-detail/${_id}`}>
                    <button className="custom-button">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;