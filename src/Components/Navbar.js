import React, { useState} from 'react'
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => { setClick(!click) }

    const closeMobileMenu = () => { setClick(false) }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#start" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="../raiza.png" alt="logo" /> 
                    </a>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <a href="#start" className="nav-links" onClick={closeMobileMenu}> Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Myprojects" className="nav-links" onClick={closeMobileMenu}> My Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutMe" className="nav-links" onClick={closeMobileMenu}> About me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Footer" className="nav-links" onClick={closeMobileMenu}> Contact me</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
