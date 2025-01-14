import React from 'react'
import style from "../styles/home.module.css"
import { services } from '@/data';
import Image from 'next/image';
const Services = () => {
  return (
    <div className="container">
            <div className="row g-3 py-3">

              {services.map((service,index) => (
                <div key={index} className="col-md-6 m-0 p-0">
                  <div className="d-flex align-items-center py-2 py-lg-4">
                    <div className={`${style.custHeight} d-flex justify-content-center align-items-center`}>
                      <Image src={service.img} width={100} height={80} alt={service.title} />
                    </div>
                    <div className={`${style.bgPrimary} ${style.textSm} w-75 d-flex flex-column justify-content-center align-items-center ${style.height} ${style.custBorder}`}>
                      <h3 className={`${style.cardsText} ${style.textSm} text-white text-start w-100 ps-5 ${style.p}`}>{service.title}</h3>
                      <p className={`m-0 px-5 lh-1 ${style.textSm} text-white ${style.p}`}>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <button type='button' className="btn bgBrown text-white px-3">Get Help</button>
              </div>
            </div>
          </div>
  )
}

export default Services
