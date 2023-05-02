import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }
    console.log(user);
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>
    return (
        <div className=''>
            <div className="navbar lg:w-[1280px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="logo">Chef Hunter</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user?.uid ?
                        <>
                            <span className=''>{user?.displayName || user?.email}</span>
                            <button onClick={handleLogout} className='btn btn-ghost'>Logout</button>
                        </> :
                        <>
                            <button className='btn btn-ghost'><Link to='/login'>Login</Link></button>
                            <button className='btn btn-ghost'><Link to='/register'>Register</Link></button>

                        </>
                    }
                    <span>{user?.photoURL ?
                        <img style={{ width: "45px", borderRadius: "50%" }} src={user.photoURL} alt='' /> :
                        <FaUserCircle className='text-[25px]'></FaUserCircle>}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;