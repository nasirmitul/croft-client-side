import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Services/Service';
import Banner from './Banner';
import man from '../../images/man.jpg'
import signature from '../../images/signature.png'
import decor from '../../images/decor.jpg'
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/home/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='container'>
            <Banner></Banner>

            <div className="our-services">
                <h2 className='home-heading'>Our Services</h2>
                <div className="services">
                    {
                        services.map(service => <Service
                            service={service}
                            key={service._id}
                        ></Service>)
                    }
                </div>

                <Link to='/services'>
                    <button className="custom-button see-all-services">
                        See all Services
                    </button>
                </Link>
            </div>

            <section class="overview">
                <div class="img">
                    <img src={decor} alt="" />
                </div>

                <div class="overview-details">
                    <div class="since">
                        <div class="line"></div>
                        <p>since from 2017</p>
                    </div>
                    <div class="title">
                        <h1>My Service <span>Overview</span></h1>
                    </div>
                    <div class="main-part">
                        <div class="text">
                            <p>
                                I am currently working on doing great wooden works. Like creating any objects or any kind of wooden decoration. I have been doing this since 2017. You can have my service by selecting any of the service in the service page mentioned.
                            </p>
                        </div>
                        <div class="profile">
                            <div class="ceo-img">
                                <img src={man} alt="" />
                            </div>
                            <div class="profile-info">
                                <h4>Graham Hudson</h4>
                                <p>Head of idea</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='get-service'>
                <h1>Select and get my service easily at your place</h1>
                <Link to='/services'><button className="custom-button">Select Service</button></Link>
            </section>

        </div>
    );
};

export default Home;