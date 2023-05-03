import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const { createUser, updateUserProfile } = useContext(AuthContext);

    // console.log(createUser);
    // const [error, setError] = useState('')
    // const { createUser } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
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


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                handleUpdateUserProfile(name, photoURL);
                form.reset();
                toast.success('user has created successfully')
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(result => {
                // console.log(result.user);
            })
            .catch(err => {
                console.log(err);

            })
    }


    return (
        <div className='form_container drop-shadow-2xl'>
            <h2 className='form_title pt-2'>Register!</h2>
            <form onSubmit={handleSubmit}>
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
                    <span className='text-red-600 text-center'>{error}</span>
                </div>
                
                {/* <span className='text-green-600 ml-8'>{success}</span> */}
                <input type="submit" value="SignUp" className='submit_btn' />
            </form>
            <p className='new_account'>New to Food Tasty <Link to='/login' className='text-warning'>Already have an account?</Link></p>
            <div className='divide_container'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;