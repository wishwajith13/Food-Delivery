import React, { useContext } from 'react'
import { StoreContext } from '../contest/StoreContext'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)

  return (
    <div id='food-display'>
        <h2>Top dishes near you</h2>
        <div>
            {food_list.map((item,index)=>{
                return
            })}
        </div>
    </div>
  )
}

export default FoodDisplay