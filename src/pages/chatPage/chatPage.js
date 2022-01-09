import React from 'react'
import Footer from '../../pages/chatPage/Footer/footer'
import './chatPage.css'
import Nav from './Nav/nav'
import Section from './Section/section'

export default function ChatPage() {
    return (
        <div>
            <div class="container">
                <div class="nav"><Nav/></div>
                <div class="section"><Section/></div>
                <div class="footer"><Footer/></div>
            </div>
        </div>
    )
}
