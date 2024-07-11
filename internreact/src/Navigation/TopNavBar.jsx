import React from 'react'

const TopNavBar = () => {
  return (
    <nav className="top-navbar">
        <ul className="nav-list">
            <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
            </li>
            <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact
                </a>
            </li>
            <li className="nav-item">
                <a href="/help" className="nav-link">
                  Help
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default TopNavBar