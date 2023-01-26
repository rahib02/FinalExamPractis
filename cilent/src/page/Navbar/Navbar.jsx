import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import { BsTelephoneOutbound } from 'react-icons/bs';





function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar_header'>
                <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
                <span>COURSE</span>
            </div>
            <div className='navbar_link'>
                <ul>
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to={"add"}>ADD</Link></li>
                    <li><Link>COURSErS</Link></li>
                    <li><Link>ELEMENTS</Link></li>
                    <li><Link>NEWS</Link></li>
                    <li><Link>CONTACT</Link></li>
                </ul>
            </div>
            <div className='navbar_contact'>
                <span ><BsTelephoneOutbound className='navbar_icon' /></span>
                <span>+43 4566 7788 2457</span>
            </div>
        </div>
    )
}

export default Navbar