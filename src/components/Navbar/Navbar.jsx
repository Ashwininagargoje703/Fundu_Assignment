import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { Profile } from "./Profile";

const Navbar = () => {
    return (
        <nav className='navbarDiv'>
            <div>
                <Link to='/'><div>Home</div></Link>
                <Link to='about'><div>About</div></Link>
                <Link to='/gaming'><div>Gaming Platform</div></Link>
            </div>
            <div>
                <Link to='/service'><div>Service</div></Link>
         <div className="navbar_login"><Profile/></div>
            </div>
        </nav>
    )
}

export default Navbar