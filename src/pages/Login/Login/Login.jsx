import React, { useContext, useState } from 'react';
import google from '../../../assets/google.png'
import github from '../../../assets/github.png'

import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Login.css';
import { AuthContext } from '../../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from 'react-lazy-load';

const Login = () => {

    const { signInUser, googleSingIn, githubSingIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('')
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // validation
        setError('')
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('please at least 1 upper case letter')
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two number')
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('please add at least one special character.')
            return;
        }
        else if (password.length < 6) {
            setError('please add at least 6 characters in your password')
            return;
        }


        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                toast('Login successful')
                navigate(from, { replace: true });

            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)

            })

    }
    // google singIn
    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                navigate(from, { replace: true });
                console.log(result.user);
            })
            .then(error => {
                console.log(error);
            })
    }
    // github SignIn
    const handleGithubSignIn = () => {
        githubSingIn(githubProvider)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className='form_container drop-shadow-2xl'>
            <h2 className='form_title pt-2'>Login!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' id='email' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name='password' placeholder='Your Password' id='password' required />
                    <p onClick={() => setShow(!show)} className='mt-2'>
                        {show ? <span>Hidden password</span> : <span>Show Password</span>}
                    </p>
                    <span className='text-red-600'>{error}</span>
                </div>

                <input type="submit" value="Login" className='submit_btn' />
            </form>
            <p className='new_account'>New to Food Tasty <Link to='/register' className='text-warning'>Create a New Account</Link></p>
            <div className='divide_container my-2'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div>
            <div className='social_login pb-4'>
                <div className='flex items-center justify-center'>
                    <button onClick={handleGoogleSingIn} className='flex items-center justify-center gap-3 lg:w-[300px] lg:h-[50px] bg-gradient-to-r from-[#f2b51c] to-[#e8dd11e8]'>
                        <LazyLoad>
                            <img className='social-img' src={google} alt="" />
                        </LazyLoad>
                        <span>SignIn Google</span>
                    </button>
                </div>
                <div className='flex items-center justify-center'>
                    <button onClick={handleGithubSignIn} className='flex items-center justify-center lg:w-[300px] lg:h-[50px] my-3 gap-3 bg-gradient-to-r from-[#f2b51c] to-[#e8dd11e8]'>
                        <LazyLoad><img className='social-img' src={github} alt="" /></LazyLoad>
                        <span>SignIn Github</span>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;