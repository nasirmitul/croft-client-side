import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer container'>
            <div className="footer-main">
                <div className="footer-part part-1">
                    <div className="logo"><Link to='/'><h4>Croft</h4></Link></div>
                    <p className="description">
                    I am currently working on doing great wooden works. Like creating any objects or any kind of wooden decoration. I have been doing this since 2017. You can have my service by selecting any of the service in the service page mentioned.
                    </p>
                </div>
                <div className="footer-part part-3 important-links">
                    <h4>Options</h4>
                    <div className="links">
                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/my-reviews'>My Reviews</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
                <div className="footer-part part-4 social-links">
                    <h4>Social</h4>
                    <div className="links">
                        <Link>FaceBook</Link>
                        <Link>Instagram</Link>
                        <Link>LinkedIn</Link>
                        <Link>Twitter</Link>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <p>All rights reserved by &copy; Nasir Mitul</p>
            </div>
        </div>
    );
};

export default Footer; 