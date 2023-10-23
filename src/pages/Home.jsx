import React, { useState } from 'react'
import SliderCom from '../components/home/SliderCom'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {
  const [sort,setSort] = useState('');
  const [category,setCategory]= useState('')
  return (
    <div>
      <div className='sm:w-auto'>
      <SliderCom/>
      <Sorting setSort={setSort}/>
      </div>
      <div className='flex'>
        <Category setCategory={setCategory}/>
        <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}

export default Home