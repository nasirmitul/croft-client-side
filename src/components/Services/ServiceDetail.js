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


                {
                    user ?
                        <form action="">
                            <textarea name="add_new_review" placeholder='Add a review' required></textarea>
                            <button className="custom-button">Add Review</button>
                        </form>
                        : <div>You are not logged in. Please go and <Link to='/login'>Signin</Link> to add review</div>
                }

            </div>

            <div className="all-reviews">
                <div className="review">
                    <div className="reviewer-image">
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <div className="reviewer-name-review">
                        <div className="reviewer-name">
                            <p>{user?.displayName}</p>
                        </div>
                        <div className="review-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt non fuga officiis culpa earum odio, exercitationem voluptatem commodi quam necessitatibus dignissimos sint perferendis quis tempore ratione temporibus natus labore nobis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;