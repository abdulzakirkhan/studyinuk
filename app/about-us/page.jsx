import React from 'react'
import style from "../../styles/about.module.css"
import Image from 'next/image'
import Services from '@/component/Services'
const page = () => {
  return (
    <>
        <div className={`${style.heroBg}`}>
            <div className="container py-4">
                <div className="row py-5 mt-3 mt-md-5">
                    <div className="col-md-12">
                    <div className="w-80 m-auto">
                        <h3 className="text-white heading2 text-center">About Us</h3>
                        <p className="text-white text-center lg">Our mission is to guide and empower students worldwide who dream of pursuing higher education in the United Kingdom. We’re here to make the journey to studying in the UK as seamless and informed as possible, helping you make well-informed decisions that will shape your future.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container mt-5 py-4">
                <div className="row justify-content-center px-4">
                    <div className="col-md-7 px-5">
                        <h1 className="textPrimary mt-4">Who We Are</h1>
                        <p className="lg text-black justify">Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id.<br /> Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt. <br /> <br /> Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. </p>
                    </div>
                    <div className="col-md-5">
                        <img src="/groupShadow.png" alt="lorem ipsum dolor sit amet" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

        <section className={`${style.aboutBg}`}>
            <div className="container mt-5 py-4">
                <div className="row justify-content-center px-4">
                    <div className="col-md-12">
                        <h1 className="textPrimary mt-4 px-md-1">Our Mission</h1>
                    </div>
                    <div className="col-md-6">
                        <img src={"/Our mission.png"}  alt="Our mission" className="img-fluid" />
                        <p className="mx-2 px-2 py-2 rounded-3 bg-white lg text-black justify">Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et</p>
                    </div>
                    <div className="col-md-6">
                    <p className="mx-2 px-2 py-2 rounded-3 bg-white lg text-black justify">Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et et semper tincidunt.Lorem ipsum dolor sit amet consectetur. Odio id sed fermentum id. Tortor egestas est ut faucibus ullamcorper. Dolor suscipit elementum lorem id egestas. In ante et</p>
                    <img src={"/our mission 1.png"} alt="Our mission" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 text-center">
                            <h1 className="textPrimary">Why Choose Us</h1>
                        </div>
                        <Services />
                    </div>
                </div>

            </div>
        </section>




        <section className="py-5">
            <div className="bgBrown mb-5">

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 px-5">
                            <div className="px-md-4 py-4">

                                <h1 className="text-white">Get in Touch</h1>
                                <p className="text-white lh-lg subtitle">Expert Guidance and Personalized Support for Your Journey to Study in the UK.</p>
                                <button className="btn bgPrimary border-0 text-white">Contact Us</button>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block text-end">
                            <Image src={"/getintouch.png"} width={400} height={400} alt="Get in Touch" className="marginCust" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default page
