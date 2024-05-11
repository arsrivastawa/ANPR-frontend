import React from 'react'
import "./Navbar.css"
import Timer from './Timer';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <h3>ANPR</h3>
            </div>
            <Timer />
            <div className='User'>
                <i class="fa fa-user" aria-hidden="true"></i>
                <span className='UserName'>
                    XYZ123
                </span>
            </div>
        </div>
    )
}
export default Navbar;