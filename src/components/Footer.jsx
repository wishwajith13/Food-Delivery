import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-white bg-zinc-700 flex flex-col items-center gap-5 p-5 pt-20' id='footer'>
        <div className=''>
            <div>
                <img src={assets.logo} alt=""/>
                <p>Modern education empowers students, encouraging creativity, critical thinking, and collaboration, shaping tomorrow's global leaders.Preserving traditions enriches communities, fostering unity and understanding, bridging past and present for future generations.</p>
                <div>
                    <img src={assets.facebook_icon} alt='Facebook'/>
                    <img src={assets.twitter_icon} alt='Twitter'/>
                    <img src={assets.linkedin_icon} alt='Linkedin'/>
                </div>
            </div>
            <div>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94-7111-21885</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p>copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer