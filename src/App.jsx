import React from "react";
import Navbar from "./components/Navbar";
import RoutePanel from "./components/RoutePanel";
import Footer from "./components/Footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";




const App = () => {
  return (
    <>
      <div className="w-4/5 m-auto ">
        <Navbar />
        <RoutePanel />
      </div>
      <Footer />
    </>
  )
}

export default App