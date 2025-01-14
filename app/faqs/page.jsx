"use client";
import React from 'react'
import style from "../../styles/faqs.module.css"
import Accordion from '@/component/Accordion';
const page = () => {
  return (
    <>
       <div className={`${style.heroBg}`}>
            <div className="container py-4">
                <div className="row py-5 mt-3 mt-md-5">
                    <div className="col-md-12">
                        <div className="w-80 m-auto">
                            <h3 className="text-white heading2 text-center">FAQS</h3>
                            <p className="text-white text-center">Can't find what you're looking for? Browse our frequently asked questions below.</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>  

       <div className={`${style.bgColor}`}>
        <div className="container mt-5 py-5">
          <div className="row justify-content-center" style={{backgroundColor:"#f9f8f8"}}>
            <div className="col-md-12">
              <h1 className="textBrown fw-bold">Frequently Asked Questions.</h1>
            </div>
            <div className="col-12 col-md-10">
              <div className="card w-100 border-0 px-0 px-md-4 py-3 rounded-3 shadow-sm" style={{width:"100%"}}>
                <div className="card-body px-0 m-0 w-100">
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>    
    </>
  )
}

export default page
