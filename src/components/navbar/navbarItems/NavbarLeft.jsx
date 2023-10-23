import React from "react";
// import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
// import { mainProduct } from "./data";

const NavbarLeft = () => {
  // const [searchTerm, setSearchTerm] = useState(mainProduct);
  // const SearchUser = (value) => {
  //   const search = value.target.value;

  //   const newData = mainProduct.filter((item) =>
  //     item.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())
  //   );
  //   setSearchTerm(newData);
  // };


  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center  border p-2 rounded-full bg-gray-200 ">
        <input
          className="bg-gray-200 outline-none sm:text-sm mw:hidden"
          id="search"
          type="text"
          placeholder="Search"
          // onChange={SearchUser}
        />

        <label htmlFor="search ">
          <BiSearchAlt2 size={28} className="cursor-pointer" />
        </label>
      </div>

      <div className="flex ml-3 items-center shop_category_left">
        <div className="flex items-center shop_category_left_a">
          <Link className="font-bold sm:text-sm mw:text-xs" to="/">
            Shop Category
          </Link>
          <SlArrowDown className="ml-2" size={14} />
        </div>
        <div className="hmenu z-10 w-[220px] font-bold md:text-sm sm:text-sm mw:text-xs">
          <ul>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/jewelery">Jewelery</Link>
            </li>
            <li>
              <Link to="/men's clothing">Men's Clothing</Link>
            </li>
            <li>
              <Link to="/women's clothing">Women's Clothing</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="font-bold border ml-5 p-3 md:text-sm sm:text-sm mw:text-xs">
        <Link to="/arrivals">New Arrivals</Link>
      </div>
    </div>
  );
};

export default NavbarLeft;
