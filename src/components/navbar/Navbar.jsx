import React from 'react'
import "../navbar/Navbar.css"
export default function Navbar() {
    return (
        <nav className='navbar container'>
            <a href="#">
                <img src="./src/assets/logo.svg" alt="" />
            </a>
            <div>
                <ul className="lists">
                    <li><a className='poppins-medium' href="#">Home</a></li>
                    <li><a className='poppins-medium' href="#">Skills</a></li>
                    <li><a className='poppins-medium' href="#">About Us</a></li>
                    <li><a className='poppins-medium' href="#">Pricing</a></li>
                    <li><a className='poppins-medium' href="#">Contacts</a></li>
                </ul>
            </div>
            <button className='btn poppins-regular'>Let’s Talk</button>
        </nav>
    )
}
