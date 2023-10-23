import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='w-[260px] p-3 mb-5 mx-5 border rounded-md relative cursor-pointer'>
        <button className='shipping'>free shipping</button>
        <img className='w-[180px] h-[160px] object-cover m-auto' src={product?.image} alt="" />
        <div className='text-center px-3 m-3'>{product?.title?.slice(0,20)}</div>
        <div className='text-red-500 font-mono pl-2 flex items-center justify-between'>{product?.price} ₼ <span className='text-black font-mono'>0%-12month</span></div>
    </div>
  )
}

export default Product