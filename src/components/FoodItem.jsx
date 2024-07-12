import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../contest/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div  className='w-full m-auto rounded-2xl shadow-3xl animate-fadein1'>
        <div  className='relative'>
            <img className='w-full rounded-t-2xl ' src={image} alt=''/>
            <div >
            {!cartItems[id]
              ?<img data-test="cart-check" className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>:
              <div data-test="cart-check" className='absolute bottom-4 right-4 flex items-center gap-2.5 p-1.5 rounded-3xl bg-white'>
                <img data-test="cart-check" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green}/>
              </div>
            }
            </div>
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