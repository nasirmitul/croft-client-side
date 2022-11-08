import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';

const Navigation = () => {

    const navigate = useNavigate();
    const { user, logoutUser } = useContext(AuthContext);

    const [showLogout, setShowLogout] = useState(false)

    const handleLogOut = () => {
        logoutUser()
            .then(() => { 
                navigate('/login')
                setShowLogout(false)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className='navbar'>
            <div className="nav container">
                <div className="logo">
                    <Link to='/'><p>Croft</p></Link>
                </div>
                <div className="nav-links">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink className={user?'show-nav' : 'hide-nav'} to='/my-reviews'>My Reviews</NavLink>
                    <NavLink className={user?'show-nav' : 'hide-nav'} to='/add-service'>Add Service</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
                <div className="get-started">
                    {
                        user ?
                            <div className='user-profile'>
                                <img onClick={() => { setShowLogout(!showLogout) }} className='user-profile-img' src={user.photoURL} alt="user" />
                                <div className={`profile-click-popup ${showLogout ? 'popup-open' : 'popup-close'}`}>
                                    <button onClick={handleLogOut} className="custom-button log-out-button">Logout</button>
                                </div>
                            </div> :
                            <Link to='/registration'><button className="custom-button">Get Started</button></Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navigation;