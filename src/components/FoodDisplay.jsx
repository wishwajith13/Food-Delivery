import React, { useContext } from 'react'
import { StoreContext } from '../contest/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)

  return (
    <div id='food-display' className='mt-7'>
        <h2 className='text-2xl font-semibold'>Top dishes near you</h2>
        <div className='grid grid-cols-sp mt-7 gap-7 gap-y-12'>
            {food_list.map((item,index)=>{
                return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay