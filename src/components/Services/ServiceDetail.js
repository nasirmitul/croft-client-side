import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../../hooks/useTitle';

const ServiceDetail = () => {
    useTitle('Service Details')
    const serviceDetail = useLoaderData();
    const { user } = useContext(AuthContext)

    const { _id, serviceName, serviceImage, servicePrice, serviceDescription, serviceRatings } = serviceDetail;

    const time = new Date();
    const [ctime, setDate] = useState(time);


    const [reviews, setReviews] = useState([]);
    const url = `https://croft-server.vercel.app/reviews?service_id=${_id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [reviews])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        let time = new Date();
        setDate(time);

        const service_review = form.add_new_review.value;

        //have to get the current time
        console.log(service_review);

        const addNewReview = {
            serviceName,
            service_review,
            service_id: _id,
            user_name: user?.displayName,
            user_image: user?.photoURL,
            user_email: user?.email,
            review_added_time: ctime
        }

        console.log(addNewReview);

        fetch('https://croft-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('review added successfully');
                }
            })
            .catch(err => console.log(err))
    }


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
                        <form action="" onSubmit={handleSubmit}>
                            <textarea name="add_new_review" placeholder='Add a review' required></textarea>
                            <button className="custom-button">Add Review</button>
                        </form>
                        : <div><p className='please-login'>You are not logged in. Please go and <Link to='/login'>Login</Link> to add review</p> </div>
                }

            </div>

            <div className="all-reviews">
                {
                    reviews.map(review => <div key={review._id} className="review">
                        <div className="reviewer-image">
                            <img src={review.user_image} alt="" />
                        </div>
                        <div className="reviewer-name-review">
                            <div className="reviewer-name">
                                <p>{review.user_name}</p>
                            </div>
                            <div className="review-text">
                                <p>{review.service_review}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetail;