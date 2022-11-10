import React from 'react';
import { json, useLoaderData, useNavigate } from 'react-router-dom';

const UpdateMyReview = () => {
    const updateReview = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const edited_value = form.edited_value.value;
        console.log(edited_value);

        const editReview = {
            _id: updateReview._id,
            service_review: edited_value
        }

        fetch(`http://localhost:5000/reviews/${updateReview._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editReview)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('review updated successfully')
                navigate('/my-reviews')
            }
            console.log(data);
        })
    }

    return (
        <div className='container update-review'>
            <div className="page-heading">
                <p>Update Review</p>
            </div>
            <div className="review-title">
                <p>Update Review for <span>{updateReview.serviceName}</span></p>
            </div>
            <form action="" onSubmit={handleSubmit} className="update-form">
                <textarea name="edited_value" defaultValue={updateReview.service_review} required></textarea>
                <button className="custom-button">Edit</button>
            </form>
        </div>
    );
};

export default UpdateMyReview;