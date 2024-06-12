import Header from "../../components/Header"
import React, { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu";

const Home=()=>{

    const [category,setCategory]=useState("All")

    return(
        <div className="">
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
    )
}

export default Home