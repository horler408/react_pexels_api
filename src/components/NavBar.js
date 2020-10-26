import React from 'react'
import logo from './../images/log.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav">
            <img src={logo} alt='Site Logo' />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
            </ul>
        </div>
    )
}
