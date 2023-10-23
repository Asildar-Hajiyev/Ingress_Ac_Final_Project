import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import Zoom from "react-img-zoom-gdn";
import { useState } from "react";
import { Link } from "react-router-dom";

const Detailsrc = ({ productDetail }) => {
  const [currentQuantity, setCurrentQuantity] = useState("");

  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.carts);
  const { id, title, image, price, category, description } = productDetail;

  const currentCart = carts.find((cart) => cart.id === id);

  const onChangeHandler = (e) => {
    setCurrentQuantity(+e.target.value);
  };

  const addBasket = () => {
    if (!currentQuantity > 0) {
      window.alert("Məhsul sayı ən az 1 olmalıdır...");
      return;
    }
    dispatch(
      addToCart({
        id: id,
        title: title,
        image: image,
        price: price,
        quantity: currentCart?.quantity
          ? currentCart.quantity + +currentQuantity
          : currentQuantity,
      })
    );
    setCurrentQuantity(0);
  };

  return (
    <div className="flex gap-12 bg-gray-200 h-[700px] justify-center pt-16 pl-5 " >
      <Zoom
        className="object-cover sm:w-[550px]\"
        img={image}
        zoomScale={1.4}
        width={1000}
        height={400}
        transitionTime={0.5}
        alt={id}
      />
      <div>
        <Link to="/" className="my-4 text-xl">
          <span className="font-serif">Home</span> / {category}
        </Link>
        <div className="text-3xl font-mono mb-5">{title?.slice(0, 25)}</div>
        <div className="text-2xl font-mono">
          <span>₼</span>
          {price}
        </div>
        <div className="font-serif  text-sm text-gray-700">{description}</div>
        <div className="flex h-16 items-center">
          <div className="flex items-center gap-0">
            <input
              className="w-20 h-12 text-center text-3xl font-bold pr-2 rounded-md"
              type="number"
              value={currentQuantity}
              onChange={onChangeHandler}
              min={1}
              max={99}
              autoFocus
            />
          </div>
          <div
            onClick={addBasket}
            className="w-[180px] h-12 flex items-center justify-center text-2xl cursor-pointer rounded-md my-4 mx-3 primary_nohover"
          >
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailsrc;
