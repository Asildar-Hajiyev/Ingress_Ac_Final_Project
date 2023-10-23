import React from "react";

const İframe = () => {
  return (
    <div>
      <iframe className="2xl:w-[1500px] xl:w-[1200px] lg:w-[980px] md:w-[750px] sm:w-[580px] mw:w-[380px] mw:h-[300px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5476293861857!2d49.80889017465606!3d40.37455387144643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dea2b26aff9%3A0x8bf044493464664c!2zQmFrxLEgRMO2dmzJmXQgVW5pdmVyc2l0ZXRp!5e0!3m2!1saz!2saz!4v1695305214589!5m2!1saz!2saz"
        width="900"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default İframe;
