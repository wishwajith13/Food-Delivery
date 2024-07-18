import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RoutePanel from "./components/RoutePanel";
import Footer from "./components/Footer";
import LoginPopup from "./components/LoginPopup";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";




const App = () => {

  const [showLogin,setShowLogin]=useState(false)

  return (
    <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="w-4/5 m-auto ">
        <Navbar setShowLogin={setShowLogin}/>
        <RoutePanel />
      </div>
      <Footer />
    </>
  )
}

export default App