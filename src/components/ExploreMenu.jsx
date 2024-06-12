import { MenuList } from "@mui/material"
import { menu_list } from "../assets/assets"
import { useState } from "react"

const ExploreMenu=({category,setCategory})=>{

    const imgDecoration="w-36 max-w-20 cursor-pointer rounded-1/2 duration-200 "
    const changeImgDecoration=" border-4 border-solid p-0.5 border-amber-600"

    return(
        <div id="explore-menu" className="flex flex-col gap-5">
            <h1 className="text-zinc-800 font-medium text-4xl">Explore our menu</h1>
            <p className="max-w-3/5 bg-slate-50">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <div className="flex justify-between items-center gap-10 text-center mt-5 mr-0 overflow-x-scroll no-scrollbar">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} >
                            <img className={category===item.menu_name? imgDecoration + changeImgDecoration:imgDecoration} src={item.menu_image} alt=""/>
                            <p className="mt-2.5 text-slate-700 text-base cursor-pointer">{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr class="h-0.5 my-8 bg-gray-200"></hr>
        </div>
    )
}

export default ExploreMenu