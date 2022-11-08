import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container error'>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The page you're looking for does bot seem to exist</p>

            <Link to='/'>
                <button className="my-button">Go to Home</button>
            </Link>

        </div>
    );
};

export default ErrorPage;