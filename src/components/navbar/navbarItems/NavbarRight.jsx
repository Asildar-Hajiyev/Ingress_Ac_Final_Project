import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { carts } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  useEffect(() => {
    let tempAmount = 0;
    carts.map(cart=> tempAmount = tempAmount+cart.quantity*cart.price )
    setTotalAmount(tempAmount)
  }, [carts]);

  return (
    <div className="flex items-center gap-8 ml-2">
      <span className="font-bold whitespace-nowrap"> {totalAmount.toFixed(2)} ₼</span>
      <div className="relative ">
        <div
          onClick={() => navigate("cart")}
          className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center "
        >
          <div className="sm:text-sm mw:hidden">
          {carts.length}
          </div>
        </div>
        <SlBasket onClick={() => navigate("cart")}   className="text-2xl mw:text-xl"/>
      </div>
    </div>
  );
};

export default NavbarRight;
