import React from "react";
import Navbar from "./components/Navbar";
import RoutePanel from "./components/RoutePanel";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";




const App=()=>{
  return(
    <div className="w-4/5 m-auto ">
      <Navbar/> 
      <RoutePanel/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
      </BrowserRouter> */}   
    </div>
  )
}

export default App