import React from 'react'
import Logo from '../../../image/LOGO.gif'
import Facebook from '../../../image/F.png'
import Insta from '../../../image/I.png'
import Tw from '../../../image/T.png'
import './nav.css'
import { Link } from 'react-router-dom'


export default function Nav() {
    return (
        <div className='nav'>
            <Link to='/users'><img src={Logo} className='logo' alt='gif' /></Link>
            <div className='icons'>
                <a href='https://www.facebook.com/' target="_blank"><img src={Facebook} /></a>
                <a href='https://www.instagram.com/' target="_blank"><img src={Insta} /></a>
                <a href='https://twitter.com/' target="_blank"><img src={Tw} /></a>
                
            </div>
            <h3>There is a future here</h3>
        </div>
    )
}
