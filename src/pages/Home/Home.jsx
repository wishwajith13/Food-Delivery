import Header from "../../components/Header"
import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";

const Home=()=>{

    const [category,setCategory]=useState("All")

    return(
        <div className="">        
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home