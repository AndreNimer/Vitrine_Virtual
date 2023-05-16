import React from 'react'
import './Nav.css'

function Nav () {
    return (
       
            <div className="nav-container">
                <div className="logo">
                    <a className="nav-logo" href='./' alt="Vitrine Virtual">Vitrine Virtual</a>
                </div>
                <div className="nav-3"></div> 
                <div className='produto'>
                    <a className='texto' href='./' alt="produto">Produtos</a>   
                </div>
            </div>
        
    )

}

export default Nav;