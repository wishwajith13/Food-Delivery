import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='text-slate-400 bg-zinc-700 flex flex-col items-center gap-5 px-32 pb-5 pt-20 mt-24' id='footer'>
        <div className='w-full grid grid-cols-3 gap-20'>
            <div className='flex flex-col items-start gap-5'>
                <img src={assets.logo} alt=""/>
                <p>Modern education empowers students, encouraging creativity, critical thinking, and collaboration, shaping tomorrow's global leaders.Preserving traditions enriches communities, fostering unity and understanding, bridging past and present for future generations.</p>
                <div className='w-40 gap-3 grid grid-cols-3'>
                    <img src={assets.facebook_icon} alt='Facebook'/>
                    <img src={assets.twitter_icon} alt='Twitter'/>
                    <img src={assets.linkedin_icon} alt='Linkedin'/>
                </div>
            </div>
            <div className='flex flex-col items-start pl-40'>
                <h2 className='text-white text-2xl font-bold pb-5'>COMPANY</h2>
                <ul>
                    <li className='mb-3'>Home</li>
                    <li className='mb-3'>About Us</li>
                    <li className='mb-3'>Delivery</li>
                    <li className='mb-3'>Privacy Policy</li>
                </ul>
            </div>
            <div className='flex flex-col items-start gap-5 pl-48'>
                <h2 className='text-white text-2xl font-bold pb-1'>GET IN TOUCH</h2>
                <ul>
                    <li className='mb-3'>+94-7111-21885</li>
                    <li className='mb-3'>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr className='w-full h-1 my-5 bg-gray-500 border-0'/>
        <p>copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer