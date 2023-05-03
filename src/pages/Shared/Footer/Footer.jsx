import React from 'react';
import './Footer.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'


const Footer = () => {
    return (
        <div className='bg-black mt-24'>
            <div className='lg:w-[1280px] mx-auto pt-[120px] px-6 lg:px-0'>
                <div className='grid grid-cols-1 sm-grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  text-white pb-16'>
                    <div className='walks-life'>
                        <div className='logo flex'>
                        <img src={logo} alt="" />
                        <span className='tasty'>Tasty</span>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <div className='flex items-center gap-4'>
                            <div className='facebook'>
                                <BsFacebook className='fb-icon'></BsFacebook>
                            </div>
                            <div className='twitter'>
                                <BsTwitter className='twitter-icon'></BsTwitter>
                            </div>
                            <div className='instagram'>
                                <AiOutlineInstagram className='
                            ins-icons'></AiOutlineInstagram>
                            </div>
                        </div>
                    </div>
                    <div className='company-info'>
                        <h5>Company</h5>
                        <Link to="">About us</Link><br />
                        <Link to="">Works</Link><br />
                        <Link to="">Latest News</Link><br />
                        <Link to="">Career</Link><br />
                    </div>
                    <div className='product-info'>
                        <h5>Product</h5>
                        <Link to="">Prototype</Link><br />
                        <Link to="">Plan & Pricing</Link><br />
                        <Link to="">Customers</Link><br />
                        <Link to="">Integrations</Link><br />
                    </div>
                    <div className='support-info'>
                        <h5 >Support</h5>
                        <Link to="">Help Desk</Link><br />
                        <Link to="">Sales</Link><br />
                        <Link to="">Become a Partner</Link><br />
                        <Link to="">Developers</Link><br />
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <div className='lg:w-[1280px] mx-auto lg:flex justify-between items center'>
                    <p>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by Walks of life</p> 
                </div>
            </div>
        </div>
    );
};

export default Footer;