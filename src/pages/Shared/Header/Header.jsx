import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
// import './Header.css'
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
    return (
        <div className='background'>
            <div className="navbar lg:w-[1280px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/statistic'>Statistics</Link></li>
                            <li><Link to='/applied'>Applied Job</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="walks-logo">Walks Of Life</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>Statistics</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li>{user && <span className='text-dark'>{user?.email || user.displayName}</span>}</li>

                        {/* <li>{user.photoURL ? <img style={{width:"70px",borderRadius:"50%"}} src={user.photoURL} alt='' /> : <FaUserCircle></FaUserCircle>}</li> */}
                        {user ?
                            <button onClick={handleLogout}><Link to='/login'>Logout</Link></button> :
                            <button><Link to='/login'>Login</Link></button>}
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <button className="start-applying-btn">Start Applying</button>
                </div> */}
            </div>
        </div>
    );
};

export default Header;