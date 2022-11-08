import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Forget = () => {
    const { forgetPass } = useContext(AuthContext);
    const [showError, setShowError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        forgetPass(email)
            .then(() => {
                console.log('password reset mail sent');
                navigate('/login')
            })
            .catch((error) => {
                console.log(error);
                if (error.message === "Firebase: Error (auth/user-not-found).") {
                    setShowError('This user is not found');
                }
            });
    }
    return (
        <div className='container sign-account'>
            <div className="sign-account-form">
                <form action="" className='sign' onSubmit={handleSubmit}>
                    <h2 className='heading'>Forget Password?</h2>
                    <p className='change-to'>Do remember email & password? <Link to='/login'>Login</Link> </p>

                    <div className="inputs">
                        <input type="email" placeholder='Enter Your Email' name='email' required />
                    </div>
                    <p style={{ color: 'red' }}>{showError}</p>


                    <div className="action-button">
                        <button className='custom-button sign-to-account' type='submit'>Forget Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Forget;