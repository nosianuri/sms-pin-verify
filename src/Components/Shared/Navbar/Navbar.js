import React from 'react';
import sms from '../../../assets/PVA-CODES-01.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
  const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/recharge">Recharge</Link></li>
    <li><Link to="/codes">Codes</Link></li>
    <li><Link to="/api">API</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li><Link to="/faqs">FAQs</Link></li>
    <li className=" bg-[#4DAFFF] text-white py-1"> <Link to="/login">Login</Link></li>
    <li className=" bg-[#5bc0de] text-white py-1"> <Link to="/registration">Registration</Link></li>
  </>

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start pl-36">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a href='/' className="normal-case text-xl"><img src={sms} alt="" /></a>
      </div>
      <div className="navbar-end hidden lg:flex mr-16">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      
      <div className="">
        <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
      </div>
    </div>
  )
}

export default Navbar