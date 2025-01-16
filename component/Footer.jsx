import React from 'react';
import style from "../styles/footer.module.css"
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={`${style.bgCust} ${style.custBorder} text-white py-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="fs-36-7">Logo</h5>
            <ul className="list-unstyled py-4">
              <li className=""><a href="#" className="text-white text-decoration-none">Your Gateway to a World-Class Education</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fs-207">Information</h5>
            <ul className="list-unstyled py-4">
              <li className="py-1"><a href="#" className="text-white text-decoration-none fs-16-sm">Contact us</a></li>
              <li className="py-1"><a href="#" className="text-white text-decoration-none fs-16-sm">About us</a></li>
              <li className="py-1"><a href="#" className="text-white text-decoration-none fs-16-sm">Blogs</a></li>
              <li className="py-1"><a href="#" className="text-white text-decoration-none fs-16-sm">Privacy policy</a></li>
              <li className="py-1"><a href="#" className="text-white text-decoration-none fs-16-sm">FAQs</a></li>
            </ul>
          </div>


          <div className="col-md-3">
            <h5 className="fs-207">Address</h5>
            <ul className="list-unstyled py-4">
                <li className="d-flex gap-2 py-1">
                    <Image src={"/locationIcon.png"} width={20} height={18} alt='location' className="mt-2" />
                    <a href="#" className="text-white text-decoration-none">Unit 21, Skyline Village, Canary Wharf. London E14 9TS</a>
                </li>
                <li className="d-flex gap-2 py-1">
                    <Image src={"/call.png"} width={25} height={20} alt='Call' className="mt-1" />
                    <a href="#" className="text-white text-decoration-none fs-16-sm">+9203323434123</a>
                </li>
                <li className="d-flex gap-2 py-1">
                    <Image src={"/mail.png"} width={25} height={20} alt='Call' className="mt-1" />
                    <a href="#" className="text-white text-decoration-none fs-16-sm">studyinuk@gmail.com</a>
                </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fs-207">Get in Touch</h5>
            <div className="py-4 d-flex gap-2">
                <a href="#" className="text-white">
                    <Image src={"/Instagram.png"} width={50} height={50} alt="Instagram" />
                </a>
                <a href="#" className="text-white">
                    <Image src={"/X.png"} width={50} height={50} alt="X" />
                </a>
                <a href="#" className="text-white">
                    <Image src={"/Facebook.png"} width={50} height={50} alt="Facebook" />
                </a>
            </div>
          </div>
          <div className="col-md-12">
            <img src='/line.png' className={`${style.Line}`} />
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <p className="mb-0 text-grey">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
