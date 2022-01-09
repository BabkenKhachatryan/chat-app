import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../image/LOGO.gif'
import './header.css'

export default function Header() {
    return (
        <div>
            <div className='header'>
                    <Link to='/users'><img src={Logo}  className='logo'/></Link>
                    <h3>There is a future here</h3>
                </div>
                <hr/>
        </div>
    )
}
