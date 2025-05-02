import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div>

    <div className='header'>
      <nav className="navbar">
        <ul className="navbar-list container">
          <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Business</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Entertainment</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">General</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Health</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Science</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Sports</a></li>
          <li className="navbar-item"><a href="#" className="navbar-link">Technology</a></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}
