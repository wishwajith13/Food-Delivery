import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Cart from "../pages/Cart/Cart"
import Home from "../pages/Home/Home"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"

const routePanel=createBrowserRouter([
    {
        path:"/cart",
        element:<Cart/>
    },
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/order",
        element:<PlaceOrder/>
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