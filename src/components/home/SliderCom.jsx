import React from "react";
import Slider from "react-slick";

const SliderCom = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mw:hidden">
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-200 pl-4">
          <div className="">
            <div className="text-3xl font-bold my-4">
              Burda sizin Reklamınız ola bilərdi
            </div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque quidem! In amet iusto accusamus dignissimos temporibus alias
              impedit et ex culpa veniam. Odio eius voluptas sit odit,
              architecto minima.
            </div>
          </div>
          <img
            className="h-[320px]"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-200 pl-4">
          <div className="">
            <div className="text-3xl font-bold my-4">
              Burda sizin Reklamınız ola bilərdi
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              atque quidem! In amet iusto accusamus dignissimos temporibus alias
              impedit et ex culpa veniam. Odio eius voluptas sit odit,
              architecto minima.
            </div>
          </div>
          <img
            className="h-[320px]"
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCom;
