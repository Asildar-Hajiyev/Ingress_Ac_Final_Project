import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import Iframe from "../components/iframe/İframe";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_h1">Contact</div>
      <div className="c_data">
        <div className="c_office ml-24">
          <MdOutlineLocationOn className="MdOutlineLocationOn" />
          <div className="c_office_right">
            <h3>Head Office</h3>
            <p>123 Demo Blvd, Miami, FL 4567, United States</p>
          </div>
        </div>
        <div className="c_phonne">
          <AiOutlinePhone className="AiOutlinePhone" />
          <div className="c_phone_right">
            <h3>Phone</h3>
            <p>+1 123-456-7890</p>
          </div>
        </div>
        <div className="c_email">
          <AiOutlineMail className="AiOutlineMail" />
          <div className="c_email_right">
            <h3>Email</h3>
            <p>mail@example.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-12">
        <Iframe />
      </div>
      <div className="box_cont">
        <div className="contdata pl-24">
          <h2 className="font-serif text-3xl pt-5">Stay In Touch</h2>
          <p className="p_title">
            Faucibus parturient dignissim nisi, magna ullamcorper facilisi
            tincidunt nulla et morbi sed risus vestibulum consectetur arcu
            pulvinar.
          </p>
          <h4>Customer Service</h4>
          <p>
            <AiOutlineMail className="AiOutline" /> support@example.com
          </p>
          <p>
            <AiOutlinePhone className="AiOutline" /> +1 123-456-7890
          </p>
          <p>
            <AiFillClockCircle className="AiOutline" />
            Mon- Sat: 10:00 AM - 20:00 PM
          </p>
          <h4 className="cont_h4">SOCIAL MEDIA</h4>
        </div>
        <div className="formbox ml-20">
          <form class="form">
            <h1>Got Any Questions?</h1>
            <label for="name">
              Name <span className="red_span">*</span>
            </label>
            <input type="text" required />

            <label for="email">
              Email <span className="red_span">*</span>{" "}
            </label>
            <input type="email" required />

            <label for="message">
              Comment or Message <span className="red_span">*</span>
            </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="primary_contact sm:w-[150px] mw:w-[100px]">
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
