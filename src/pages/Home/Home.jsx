import Header from "../../components/Header"
import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";
import AppDownload from "../../components/AppDownload";

const Home=()=>{

    const [category,setCategory]=useState("All")

    return(
        <div className="">        
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
}

export default Home