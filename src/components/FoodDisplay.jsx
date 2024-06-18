import React, { useContext } from 'react'
import { StoreContext } from '../contest/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)

  return (
    <div id='food-display'>
        <h2>Top dishes near you</h2>
        <div>
            {food_list.map((item,index)=>{
                return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay