import { useState } from "react"
import { assets } from "../assets/assets"
import Button from "./Button"

const Navbar =()=>{

    const [menu,setMenu]=useState("Home")
    const menuDesign = "pb-0.5 border-b-2 border-sky-950 cursor-grab "

    return(
    <div className="pt-5 pr-0 flex justify-between items-center ">
        <img src={assets.logo} alt="" className="w-40" />
            <ul className="flex list-none gap-10 font-outfit text-lg text-sky-950">
                <li onClick={()=>setMenu("Home")} className={menu==="Home"?menuDesign:"cursor-grab"}>Home</li>
                <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?menuDesign:"cursor-grab"}>Menu</li>
                <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?menuDesign:"cursor-grab"}>Mobile-App</li>
                <li onClick={()=>setMenu("Contact US")} className={menu==="Contact US"?menuDesign:"cursor-grab"}>Contact US</li>
            </ul>
            <div className="flex items-center gap-10 ">
                <img src={assets.search_icon} alt="search_icon" />
                <div className="relative">
                    <img src={assets.basket_icon} alt="basket_icon" />
                    <div className="absolute min-w-3 min-h-3 bg-orange-600 rounded-md bottom-6 left-6"></div>                    
                </div>
                <Button value="Sign In" buttonOutline={"border-2 border-orange-500 font-outfit"} />
            </div>
    </div>
    )
}

export default Navbar