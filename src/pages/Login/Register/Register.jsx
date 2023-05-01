import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProviders';



const Register = () => {
    // const [error, setError] = useState('')
    // const { createUser } = useContext(AuthContext);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;
        console.log(email, password, confirmPass);

       
    }
    return (
        <div className='form_container'>
            <h2 className='form_title mt-3'>Register!</h2>
            <form>
                <div className="form_control">
                    <label className='label' htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Your Name' id='name' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="photoURL">Photo URL</label>
                    <input type="text" name='photoURL' placeholder='photoURL' id='photoURL' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' id='email' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' id='password' required />
                </div>
                {/* <span className='text_error'>{error}</span> */}
                <input type="submit" value="SignUp" className='submit_btn' />
            </form>
            <p className='new_account'>New to Chef Recipe <Link to='/login' className='text-info'>Already have an account?</Link></p>
            <div className='divide_container'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div>
            {/* <div className='social_login'>
                
                <button className='google_btn'>
                    <span><i class="fa-brands fa-google"></i></span>
                    SignInwith Google</button>
            </div> */}
        </div>
    );
};

export default Register;