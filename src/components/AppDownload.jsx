import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div id='app-download' className='m-auto mt-24 text-xl text-center font-medium'>
        <p>For Better Experience Download <br/> Tomato App</p>
        <div className='flex justify-center gap-4 mt-10'>
            <img className='w-40 max-w-48 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src={assets.play_store} alt='play store icon'/>
            <img className='w-40 max-w-48 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src={assets.app_store} alt='app store icon'/>
        </div>
    </div>
  )
}

export default AppDownload