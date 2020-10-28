import React from 'react'
import logo from './../images/log.png'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="nav">
            <img src={logo} alt='Site Logo' className="logo" />
            <ul className="nav_links">
                <li className="nav_item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav_item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav_item">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="nav_item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="nav_item">
                    <Link to="/details">Details</Link>
                </li>
            </ul>
        </div>
    )
}
