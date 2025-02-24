import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"

const routePanel=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
])

const RoutePanel =()=>{
    return(
        <div>
           <RouterProvider router={routePanel}/>
        </div>
    )
}

export default RoutePanel