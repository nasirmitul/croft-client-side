import React from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;

        console.log(name, email, password, image);
    }

    return (
        <div className='container add-new-service'>
            <div className="page-heading">
                <p>Add new service</p>
            </div>

            <form action="" className='add-service' onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" placeholder='Service Name' name='service_name' required />
                    <input type="text" placeholder='Service Image' name='service_img' required />
                    <input type="number" placeholder='Price' name='service_price' required />
                    <input type="number" placeholder='Ratings' name='service_ratings' required />
                    <textarea name="service_description" placeholder='Service Description' required></textarea>
                </div>

                <button className='custom-button' type='submit'>Signup</button>
            </form>
        </div>
    );
};

export default AddService;