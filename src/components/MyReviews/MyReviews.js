import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { TiDeleteOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    useTitle('My reviews')
    const { user, logoutUser } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    const url = `http://localhost:5000/my-reviews?user_email=${user?.email}`
    // const url = `http://localhost:5000/my-reviews?user_email=nasirmitul28@gmail.com`

    useEffect(() => {
        fetch(url, {
            headers: {
                authorization: localStorage.getItem('secret-token')
            }
        })
            .then(res => {
                if(res.status == 401 || res.status === 403){
                    logoutUser();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)
                console.log(data.authorization);
            })
    }, [url])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
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
                    (reviews.length === 0) ?
                        <div>
                            <p className='no-reviews'>No reviews were added</p>
                        </div> :
                        reviews.map(review =>
                            <div key={review._id}>
                                <div className="reviews">
                                    <div className="review-details">
                                        <p className='service-name'><span>Service Name: </span>{review?.serviceName}</p>
                                        <p className='service-review'><span>Review: </span>{review?.service_review}</p>
                                    </div>
                                    <div className="actions">
                                        <Link to={`/my-reviews/update-review/${review._id}`}><FiEdit2 className='icons'></FiEdit2></Link>
                                        <MdDelete onClick={() => handleDelete(review._id)} className='icons'></MdDelete>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>


            {/* <div className={`edit-review ${showUpdate ? 'show-update-popup' : 'hide-update-popup'}`}>
                <div className="edit-review-title">
                    <h3>Edit This review</h3>
                    <TiDeleteOutline onClick={() => { setShowUpdate(false) }}></TiDeleteOutline>
                </div>
                <div className="edit-review-field">
                    <form action="" onSubmit={handleSubmit}>
                        <input name='edited_value' type="text" defaultValue={defaultValue} required />
                        <button className="custom-button">Edit</button>
                    </form>
                </div>
            </div> */}


        </div>
    );
};

export default MyReviews;