import React from "react";
import imge1 from "../../image/fashion-designer-template-new-arrival-header-img.jpg";
import { mainProduct } from "../../data/mainProduct";
import ArrCart from "./ArrCart";
import { useSelector } from "react-redux";
import Loading from "../Loading";
const NewArrivals = () => {
  const { productsStatus } = useSelector((state) => state.products);
  return (
    <div className="arrivals">
      <div className="arr_img">
        <img src={imge1} alt="arr_image" />
        <div className="arr_title">
          
          <div className="arr_title_main">
            <h2 className="">New <br /> Arrivals</h2>
            <br />
            <p className="arr_media">
              <div className="arr_line"></div>
              In congue venenatis bibendum viverra sit augue elit sed viverra
              fames blandit.
            </p>
          </div>
        </div>
      </div>
      <div className="arr_cart flex flex-wrap justify-center ">
        {productsStatus === "LOADING" ? (
          <Loading />
        ) : (
          mainProduct.map((item) => {
            return <ArrCart key={item.id} data={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
