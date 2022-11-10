import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);



    // const url = `http://localhost:5000/my-reviews?user_email=${user?.email}`
    const url = `http://localhost:5000/my-reviews?user_email=nasirmitul28@gmail.com`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // console.log(reviews);


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    alert('deleted successfully')
                    const remaining = reviews.filter(review => review._id !== id);
                    setReviews(remaining)
                }
            })

        }
    }

    return (
        <div className='container'>
            <div className="page-heading">
                <p>My Reviews</p>
            </div>

            <div className="my-reviews">
                {
                    reviews.map(review =>

                        <div key={review._id}>
                            <div className="reviews">
                                <div className="review-details">
                                    <p className='service-name'><span>Service Name: </span>{review?.serviceName}</p>
                                    <p className='service-review'><span>Review: </span>{review?.service_review}</p>
                                </div>
                                <div className="actions">
                                    <FiEdit2 className='icons'></FiEdit2>
                                    <MdDelete onClick={() => handleDelete(review._id)} className='icons'></MdDelete>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyReviews;