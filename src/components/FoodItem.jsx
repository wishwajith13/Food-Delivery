import React from 'react'
import { assets } from '../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='w-full m-auto rounded-2xl shadow-3xl animate-fadein1'>
        <div>
            <img className='w-full rounded-t-2xl ' src={image} alt=''/>
        </div>
        <div className='p-5'>
            <div className='flex justify-between items-center mb-2.5'>
                <p className='text-xl font-medium '>{name}</p>
                <img className='w-16 ' src={assets.rating_starts} alt=''/>
            </div>
            <p className='text-slate-600 text-xs'>{description}</p>
            <p className='text-amber-700 text-xl font-medium mt-2.5 mr-0'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem