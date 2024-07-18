import React, { useState } from 'react'
import { assets } from '../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Sign Up")

  return (
    <div>
        <form>
            <div>
                <h2>{currentState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='cross icon'/>
            </div>
        </form>
    </div>
  )
}

export default LoginPopup