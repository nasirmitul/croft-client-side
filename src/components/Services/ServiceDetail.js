import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../../contexts/UserContext';

const ServiceDetail = () => {
    const serviceDetail = useLoaderData();
    const { user } = useContext(AuthContext)

    const { serviceName, serviceImage, servicePrice, serviceDescription, serviceRatings } = serviceDetail;
    return (
        <div className='container'>
            <div className="service-details">
                <div className="service-image">
                    <img src={serviceImage} alt="" />
                </div>
                <div className="service-other-details">
                    <h3 className="service-name">{serviceName}</h3>
                    <div className="service-price-ratings">
                        <p className="service-price">{servicePrice} $</p>
                        <div className="ratings">
                            <p className="service-ratings">{serviceRatings} <AiFillStar></AiFillStar></p>
                        </div>
                    </div>
                    <h4 className='part-title'>Description</h4>
                    <p className="service-description">{serviceDescription}</p>
                </div>
            </div>

            <div className="add-new-review">
                <form action="">
                    <textarea name="add_new_review" placeholder='Add a review' required></textarea>
                    {
                        user ? <button className="custom-button">Add Review</button> : <div>You are not logged in. Please go and <Link>Signin</Link> to add review</div>
                    }
                </form>

            </div>
        </div>
    );
};

export default ServiceDetail;