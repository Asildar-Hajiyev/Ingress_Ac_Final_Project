import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCartTotal } from '../redux/cartSlice';
import Cartsrc from '../components/cart/Cartsrc';

const Cart = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts ,itemCount,totalAmount} = useSelector((state) => state.carts);
    const location =useLocation()
  
    console.log(carts,itemCount,totalAmount,'carts>>>')
  useEffect(()=>{
    dispatch(getCartTotal())
  },[dispatch,location,navigate])
  return (
    <div>
        {
           carts?.length > 0 ? 
            <div>
                {
                    carts?.map((cart,i)=>(
                        <Cartsrc key={i} cart={cart}/>
                    ))
                }
                <div className='text-xl flex justify-end'>Total Amount : <span className='font-bold'>{totalAmount} ₼</span></div>
               
            </div> :
            <div className='flex items-center justify-center font-bold h-[300px]'>
                No products in the cart.
            </div>
        }
    </div>
  )
}

export default Cart