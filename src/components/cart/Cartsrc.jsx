import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Cartsrc = ({ cart }) => {
  const { id, title, description, price, quantity, image } = cart;

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="my-8 border p-2 flex items-center justify-between">
        <div
          onClick={() => dispatch(removeFromCart(id))}
          className= "border border-red-500 w-[100px] h-12 text-red-500 text-xl flex items-center justify-center cursor-pointer rounded-md mx-4 sm:text-sm mw:text-xs hover:bg-red-500 hover:text-white"
        >
          Delete
        </div>
        <div className="">
          <div className="text-xl sm:text-sm mw:text-xs">{title?.slice(0,22)}</div>
          <div>{description}</div>
        </div>
        <div className="font-thin text-2xl flex text-center sm:text-sm mw:text-xs">
          {price}<span>₼ - </span> Quantity ({quantity})
        </div>
        <img
          className="w-[100px] h-[100px] object-cover"
          src={image}
          alt={id}
        />
      </div>
    </div>
  );
};

export default Cartsrc;
