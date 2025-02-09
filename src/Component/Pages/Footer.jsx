import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/Footer.css'
import logo from '../Static/logo.png'
const Footer = () => {
    return (
        <div className='container footer'>
            <div className='footer1'>
                <div className='newsletter'>
                    <div className='footer-logo'>
                        <img src={logo} alt='' width={100} height={70}/>
                    </div>
                    <div className='footer-content'>
                        <p>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
                        <form className='form'>
                            <input type='text' className='form-control input-footer '/>
                            <button className='footer-button'>Join</button>
                        </form>
                        <p className='footer-privacy'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
                    </div>
                </div>
                <div className='footer-box-2'>
                    <div className='col-1'>
                            <div className='footer-link-heading'>
                                <h6>Useful Links</h6>
                            </div>
                            <div className='footer-links'>
                                <ul className='footer-ul'>
                                    <li>
                                        <NavLink>Home Page</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>About Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Contact Us</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Blog Posts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>FAQs</NavLink>
                                    </li>
                                </ul>

                            </div>
                    </div>
                    <div className='col-1'>
                    <div>
                                <h6>Resources</h6>
                            </div>
                            <div className='footer-links'>
                                <ul className='footer-ul'>
                                    <li>
                                        <NavLink>Help Center</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>User Guide</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Community Forum</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Feedback</NavLink>
                                    </li>
                                    <li>
                                        <NavLink>Support</NavLink>
                                    </li>
                                </ul>

                            </div>
                    </div>
                    <div className='col-1'>
                    <div>
                                <h6>Connect With Us</h6>
                            </div>
                            <div className='footer-links'>
                                <ul className='footer-ul'>
                                    <li>
                                        <NavLink><i class="fa-brands fa-facebook"></i>Facebook</NavLink>
                                    </li>
                                    <li>
                                        <NavLink><i class="fa-brands fa-instagram"></i> Instagram</NavLink>
                                    </li>
                                    <li>
                                        <NavLink><i class="fa-brands fa-x-twitter"></i>X</NavLink>
                                    </li>
                                    <li>
                                        <NavLink><i class="fa-brands fa-linkedin"></i>Linkedin</NavLink>
                                    </li>
                                    <li>
                                        <NavLink><i class="fa-brands fa-youtube"></i>YouTube</NavLink>
                                    </li>
                                </ul>

                            </div>
                    </div>
                </div>
            </div>
            <div className='credit'>
                <hr></hr>
                <div className='footer-bottom'>
                <div>
                    <p>&copy; 2024 Osumare. All rights reserved.</p>
                </div>
                <div>
                    <NavLink className='text-decoration-underline footer-line'>Privacy Policy </NavLink>
                    <NavLink className='text-decoration-underline footer-line'>Term of Service</NavLink>
                    <NavLink className='text-decoration-underline'>Cookie Settings</NavLink>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
