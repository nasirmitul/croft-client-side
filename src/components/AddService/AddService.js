import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {

    const time = new Date().toLocaleTimeString();
    const [ctime, setDate] = useState(time);

    const handleSubmit = (e) => {
        e.preventDefault();

        let time = new Date().toLocaleTimeString();
        setDate(time);

        const form = e.target;

        const service_name = form.service_name.value;
        const service_img = form.service_img.value;
        const service_price = form.service_price.value;
        const service_ratings = form.service_ratings.value;
        const service_description = form.service_description.value;

        //have to get the current time
        console.log(service_name, service_img, service_price, service_ratings, service_description, ctime);

        const addNewService = {
            serviceName: service_name,
            serviceImage: service_img,
            servicePrice: service_price,
            serviceRatings: service_ratings,
            serviceDescription: service_description
        }

        console.log(addNewService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    form.reset();
                    alert('service added successfully');
                }
            })
            .catch(err => console.log(err))
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
                <button className='custom-button' type='submit'>Add new Service</button>
            </form>
        </div>
    );
};

export default AddService;