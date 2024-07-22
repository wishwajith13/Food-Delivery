import React, { useState } from 'react'
import { assets } from '../assets/assets'
import Button from './Button'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Log In")

  return (
    <div className='fixed z-1 w-full h-full bg-gr grid'>
        <form className='place-self-center max-w-80 text-zinc-700 bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm animate-fadein'>
            <div className='flex justify-between items-center text-black font-bold text-2xl'>
                <h2>{currentState}</h2>
                <img data-test="click-cross" className='w-4 cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='cross icon'/>
            </div>
            <div className='flex flex-col gap-5'>
                {currentState==="Log In"?<></>:<input data-test="text" className='outline-none border-2 border-solid p-2.5 rounded' type='text' placeholder='Your Name' required/>}             
                <input data-test="email" className='outline-none border-2 border-solid p-2.5 rounded' type='email' placeholder='Your Email' required/>
                <input data-test="password" className='outline-none border-2 border-solid p-2.5 rounded' type='password' placeholder='Password' required/>
            </div>
            <Button passTestItem="click-logIn-button" value={currentState==="Sign Up"?"Create Account":"Log In"} buttonOutline={"border-2 border-orange-500 font-outfit text-lg"}/>
            <div className='flex items-start gap-2 mt-3.5'>
                <input data-test="checkbox" className='mt-1' type='checkbox' required/>
                <p className='text-orange-700 font-medium cursor-pointer'>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currentState==="Log In"?<p>Create a new account?<span data-test="click-hear" className='text-orange-700 font-medium cursor-pointer' onClick={()=>setCurrentState("Sign Up")}> Click Here</span></p>
            :<p>Already have an account?<span className='text-orange-700 font-medium cursor-pointer' onClick={()=>setCurrentState("Log In")}> Login Here</span></p>}       
        </form>
    </div>
  )
}

export default LoginPopup