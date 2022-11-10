import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import banner from '../../images/banner.png'
const Banner = () => {
    useTitle('Home')
    return (
        <div className='banner'>
            <div className="banner-left">
                <div className="title">
                    <h1>I provide the best service about wooden decoration at your place</h1>
                </div>
                <Link to='services'><button className="custom-button">My Services</button></Link>
            </div>
            <div className="banner-right">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;