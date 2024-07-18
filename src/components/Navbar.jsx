import { useState } from "react"
import { assets } from "../assets/assets"
import Button from "./Button"
import { Link, NavLink } from 'react-router-dom'

const Navbar =({setShowLogin})=>{

    const [menu,setMenu]=useState("Home")
    const menuDesign = "pb-0.5 border-b-2 border-sky-950 cursor-grab"

    return(
    <div className="pt-6 pr-0 flex justify-between items-center ">
        <img src={assets.logo} alt="" className="w-40 md:max-lg:w-28 lg:max-xl:w-36 vsm:max-md:w-28" />
            <ul className="flex list-none gap-10 font-outfit text-lg text-sky-950 md:max-lg:gap-3 md:max-lg:text-sm lg:max-xl:gap-6 vsm:max-md:hidden">
                <a href='/' onClick={()=>setMenu("Home")} className={menu==="Home"?menuDesign:"cursor-grab"}>Home</a>
                <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?menuDesign:"cursor-grab"}>Menu</a>
                <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?menuDesign:"cursor-grab"}>Mobile-App</a>
                <a href="#footer" onClick={()=>setMenu("Contact US")} className={menu==="Contact US"?menuDesign:"cursor-grab"}>Contact US</a>
            </ul>
             <div className="flex items-center gap-10 md:max-lg:gap-4 vsm:max-sm:gap-7">
                <img src={assets.search_icon} alt="search_icon" className="vsm:max-sm:hidden"/>
                <div className="relative vsm:max-sm:w-5">
                    <img src={assets.basket_icon} alt="basket_icon" />
                    <div className="absolute min-w-3 min-h-3 bg-orange-600 rounded-md bottom-6 left-6"></div>                    
                </div>
                <Button setShowLogin={setShowLogin} value="Sign In" buttonOutline={"border-2 border-orange-500 font-outfit vsm:max-sm:text-xs vsm:max-sm:h-"} />
            </div>
    </div>
    )
}

export default Navbar