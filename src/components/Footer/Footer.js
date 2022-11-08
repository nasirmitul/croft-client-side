import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-main">
                <div className="footer-part part-1">
                    <div className="logo"><Link to='/'><h4>Croft</h4></Link></div>
                    <p className="description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum autem atque fugit ut culpa deleniti saepe dolorem nobis! Tempora, impedit?
                    </p>
                </div>
                <div className="footer-part part-2 services-links">
                    <h4>Services</h4>
                    <div className="links">
                        <Link>Service 1</Link>
                        <Link>Service 2</Link>
                        <Link>Service 3</Link>
                        <Link>Service 4</Link>
                        <Link>Service 5</Link>
                        <Link>Service 6</Link>
                    </div>
                </div>
                <div className="footer-part part-3 important-links">
                    <h4>Options</h4>
                    <div className="links">
                        <Link>Home</Link>
                        <Link>Services</Link>
                        <Link>My Reviews</Link>
                        <Link>Blog</Link>
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