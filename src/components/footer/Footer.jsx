import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer md:text-sm sm:text-sm mw:text-xs">
        <div className="foo1 ">
          <img
            src="https://websitedemos.net/fashion-designer-boutique-02/wp-content/uploads/sites/917/2021/07/site-logo-white.svg"
            alt=""
          />
          <br />
          <div className="foo1_span">
            Pulvinar aenean dignissim porttitor sed risus urna, pretium quis non
            id.
          </div>
          <ul className="foo_sosial">
            <li>
              <Link to="https://www.instagram.com/_asildar_haciyev_/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/profile.php?id=100029502363228">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://az.linkedin.com/in/asildar-hac%C4%B1yev-b89a82223">
                <AiFillLinkedin />
              </Link>
            </li>
          </ul>
        </div>
        <div className="foo2">
          <h2>Information</h2>
          <ul className="foo2_ul">
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/about">My story</Link>
            </li>
            <li>
              <Link to="/about">Awards & achievement</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="foo3">
          <h2>Discover</h2>
          <ul className="foo3_ul">
            <li>
              <Link to="/dresses">Dresses</Link>
            </li>
            <li>
              <Link to="/bottoms">Bottoms</Link>
            </li>
            <li>
              <Link to="/footwear">Footwear</Link>
            </li>
            <li>
              <Link to="/accessories">Accessories</Link>
            </li>
          </ul>
        </div>
        <div className="foo4">
          <h2 className="locateus">Locate Us</h2>
          <span>
            123 Demo Blvd, Miami, FL 4567, <br /> <br /> United States <br />
          </span>
          <span>
            +1 123-456-7890 <br />
            mail@example.com
          </span>
        </div>
      </div>
      <hr />
      <div className="foospan">
        © 2023 Fashion Designer. Powered by Fashion Designer
      </div>
    </>
  );
};

export default Footer;
