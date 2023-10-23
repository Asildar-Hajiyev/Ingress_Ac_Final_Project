import React from "react";
import { BsQuote } from "react-icons/bs";
import Testimonials from "./Testimonials";

const About = () => {
  return (
    <div className="about md:text-sm sm:text-xs mw:text-xs">
      <h1>About</h1>
      <div className="header_a">
        <figure className="card_about">
          <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/fashion-designer-about-owner-img.jpg" alt="about1" />
          <h4 className="about_n">
            <b>Cynthia Knight</b>
          </h4>
          <figcaption>Fashion Designer</figcaption>
        </figure>
        <div className="right_h_a">
          <h4 className="about_n">
            <b>
              Eu turpis lectus pulvinar mattis tortor varius dolor ante iaculis
              augue nulla eget nunc ut viverra nulla sagittis justo id orci
              dictum ipsum imperdiet.
            </b>
          </h4>
          <p>
            Elementum mattis pharetra gravida quam ante sagittis, quis a
            tincidunt non sed facilisis leo adipiscing erat id cursus volutpat
            lacus id mi pretium netus aliquam tellus, ut cursus felis elit arcu
            etiam cursus eu leo, rhoncus lacus condimentum mattis ornare sodales
            senectus feugiat erat risus ornare euismod odio pellentesque commodo
            morbi sit tincidunt mauris et dignissim vel nunc auctor in ante urna
            vestibulum hendrerit.
          </p>
          <BsQuote fontSize="5rem" color="#DDD1C1" />
          <span>
            Fashion will always netus quis id odio amet nullam semper vitae
            porta quis massa risus ipsum felis est semper diam augue nunc fames
            vulputate enim vitae.
          </span>
          <img src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/signature.png" alt="signature" />
        </div>
      </div>


       <Testimonials/>  
    </div>
  )
}

export default About