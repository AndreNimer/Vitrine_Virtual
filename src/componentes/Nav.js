import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav () {
    return (
       
            <div className="nav-container">
                <div className="logo">
                    <Link className="nav-logo" to='/' alt="Vitrine Virtual">Vitrine Virtual</Link>
                </div>
                <div className="nav-3"></div> 
                <div className='home'>
                    <Link className='texto' to='/' alt="home">Home</Link>   
                </div>
            </div>
        
    )

}

export default Nav;