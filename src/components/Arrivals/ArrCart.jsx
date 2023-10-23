import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsHandbagFill } from "react-icons/bs";
import Button from "../Button";
const ArrCart = ({ data, discount }) => {
  const { title, image, price } = data;

  return (
    <div className="card flex-wrap flex items-center">
      <div className="card_sec">
        <Link>
          <img className="border  object-cover" src={image} alt="salam" />
          <div className="bag_icon">
            <BsHandbagFill />
          </div>
          <div className="button_secondary">
            <Button text="add to cart" className="secondary" />
          </div>
        </Link>
        <p className="card_p flex items-center justify-center">
          {title?.slice(0, 22)}
        </p>
        <ul className="card_star flex items-center justify-center">
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
          <li>
            <AiOutlineStar />
          </li>
        </ul>
        <h5 className="flex items-center justify-center">$: {price}</h5>
        <div className="discoun t">
          {" "}
          <p>{discount}</p>
        </div>
      </div>
    </div>
  );
};

export default ArrCart;
