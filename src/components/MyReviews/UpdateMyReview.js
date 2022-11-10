import React from 'react';
import { json, useLoaderData } from 'react-router-dom';

const UpdateMyReview = () => {
    const updateReview = useLoaderData();
    

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
            console.log(data);
        })
    }

    return (
        <div>
            <h2>Update Review for {updateReview.serviceName} </h2>

            <form action="" onSubmit={handleSubmit}>
                <input name='edited_value' type="text" defaultValue={updateReview.service_review} required />
                <button className="custom-button">Edit</button>
            </form>
        </div>
    );
};

export default UpdateMyReview;