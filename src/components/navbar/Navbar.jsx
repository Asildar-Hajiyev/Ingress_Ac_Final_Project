import React from 'react'
import NavbarLeft from './navbarItems/NavbarLeft'
import NavbarRight from './navbarItems/NavbarRight'
 
const Navbar = () => {
  return (
    <div className='flex items-center justify-between my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar