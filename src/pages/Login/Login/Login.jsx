import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Login.css';
import { AuthContext } from '../../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { signInUser, googleSingIn, githubSingIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    // const [error, setError] = useState('')
    // const [show, setShow] = useState(false);
    // const { signInUser } = useContext(AuthContext)
    // const navigate = useNavigate();
    // const location = useLocation();

    // let from = location.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        // if (password.length < 6) {
        //     setError('password must be at least 6 characters')
        // }
        // if (password.length === 6) {
        //     setError('Login Succesfull')
        // }

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()

            })
            .catch(err => {
                console.log(err.message);

            })

    }
    // google singIn
    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.log(error);
            })
    }
    const handleGithubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className='form_container'>
            <h2 className='form_title'>Login!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' id='email' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' id='password' required />
                    {/* <p onClick={() => setShow(!show)}>
                        {show ? <span>Hidden</span> : <span>Show Password</span>}
                    </p> */}
                    {/* <span className='text_error'>{error}</span> */}
                </div>

                <input type="submit" value="Login" className='submit_btn' />
            </form>
            <p className='new_account'>New to Chef Recipe <Link to='/register' className='text-info'>Create a New Account</Link></p>
            <div className='divide_container'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div>
            <div className='social_login flex justify-around'>
                <button onClick={handleGoogleSingIn} className='google_btn btn btn-dark'>
                    SignIn Google
                </button>
                <button onClick={handleGithubSignIn} className='google_btn btn btn-dark'>
                    SignIn Github
                </button>
            </div>
        </div>
    );
};

export default Login;