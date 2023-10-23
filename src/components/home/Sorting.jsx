import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-300 my-5 p-5 flex items-center justify-end sm:w-auto'>
        <select onChange={e=> setSort(e.target.value)} className='bg-gray-200 px-5 py-3 '>
            <option  value="">Default Sorting</option>
            <option  value="inc">Sort by Price: low to hight</option>
            <option  value="dec">Sort by Price: hight to low</option>
        </select>
    </div>
  )
}

export default Sorting