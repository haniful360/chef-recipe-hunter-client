import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import './Header.css';
import { FaUserCircle } from 'react-icons/fa';
import ActiveLink from '../../Others/ActiveLink/ActiveLink';
import logo from '../../../assets/logo.png';
import LazyLoad from 'react-lazy-load';



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
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/about'>About</ActiveLink></li>
        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
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
                    <Link to="/" className="logo flex items-center gap-2 ">
                        <LazyLoad><img src={logo} alt="" /></LazyLoad><span className='mt-3 text-[#FAC031]'>Tasty</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end" >
                    {user?.uid ?
                        <>
                            {/* <span className=''>{user?.displayName || user?.email}</span> */}
                            <button onClick={handleLogout} className='btn btn-ghost capitalize'>Logout</button>
                        </> :
                        <>
                            <button className='capitalize'><ActiveLink to='/login'>Login</ActiveLink></button>
                            <button className='mx-4 capitalize'><ActiveLink to='/register'>Register</ActiveLink></button>

                        </>
                    }
                    <span>{user?.photoURL ?
                        <div className="tooltip tooltip-left tooltip-warning" data-tip={user?.displayName || user?.email}>
                            <img style={{ width: "45px", borderRadius: "50%" }} src={user.photoURL} alt='' />
                        </div>

                        :
                        <FaUserCircle className='text-[25px]'></FaUserCircle>}</span>
                </div>

            </div>

        </div>
    );
};

export default Header;