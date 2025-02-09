import React from 'react'
import '../Assets/Navbar.css'
import logo from '../Static/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <nav class="container navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo} height={70}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" Navbar ollapse navbar-collapse" id="navbarNav">
                        <ul class=" navbar-nav lists">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="#">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">More Options</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Contact</NavLink>
                            </li>
                            <div className='d-flex'>
                                <NavLink className="nav-link text-danger" to="#" ><button type="button" className=" text-danger btn1">Log in</button></NavLink>
                                <NavLink className="nav-link text-danger" to="#" ><button type="button" className=" btn2">Sign in</button></NavLink>
                            </div>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
