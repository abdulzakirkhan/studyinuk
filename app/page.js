"use client";
import React, { useState } from 'react'
import style from "../styles/home.module.css"
import Image from 'next/image';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { services } from '@/data';
import Inputs from '@/component/Inputs';
import Services from '@/component/Services';
const page = () => {
  const [selectedOption1, setSelectedOption1] = useState("studyInUK");
  const [selectedOption2, setSelectedOption2] = useState("postGraduate");
  const [selectedOption3, setSelectedOption3] = useState("anyUniversity");

  const handleChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };
  
  const handleChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };
  const listItems = [
    { title: 'Global Recognition', description: 'Degrees from UK universities are recognized and respected worldwide, opening doors to career opportunities across the globe' },
    { title: 'Top Universities', description: 'The UK is home to some of the world\'s most prestigious universities.' },
    { title: 'Career Opportunities', description: 'The Graduate Route visa allows international students to stay and work in the UK for up to two years after graduation, gaining valuable professional experience.' },
    { title: 'Research Excellence', description: 'UK universities provide access to state-of-the-art facilities and resources, making it an ideal place for those passionate about research.' },
  ];

  const courses=[
    {title:"Engineering",img:"/engineering.png"},
    {title:"Law",img:"/law.png"},
    {title:"Business",img:"/business.png"},
    {title:"Finance",img:"/finance.png"},
  ]

  const universities=[
    {title:"University of Manchester",img:"manchester.png"},
    {title:"University of Oxford",img:"oxford.png"},
    {title:"University of Cambridge",img:"cambridge.png"},
  ]

  
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    message: Yup.string().required('Message is required')
  });

  return (
    <>
        <div className={`${style.hero}`}>
            <div className={`container ${style.ptCust}`}>
                <div className="row z-3 justify-content-center">
                    <div className="col-md-9">
                        <h1 className={`${style.headingMd}`}>Your Pathway to Studying in the <span className={`${style.textRed}`}>U</span><span className={`${style.textPrimary}`}>K</span> Starts Here</h1>
                        <p className={`${style.homeText}`}>We’re here to help you find the right university, navigate applications, and settle in. Together, we’ll make your study abroad dreams come true.</p>
                        <p className={style.textSm}>The UK has a rich legacy of academic excellence. With over 600,000 students from around the globe choosing the UK each year, you’ll join a diverse community dedicated to innovation, creativity, and global impact.</p>
                        <p className={`${style.textMedium}`}>Enquire now to explore your path to a world-class UK education and a future full of possibilities.</p>
                       <div className="text-center">
                        <button type='button' className="btn btn-primary btn-cust border-0 py-sm-2 py-md-3 px-3">Enquire Now</button>
                       </div>

                       <div className="col-12 py-md-4 mt-2">
                        <Inputs />
                       </div>

                    </div>
                </div>
            </div>
        </div>

        <section className={`${style.Cards}`} style={{height:"100vh"}}>
          <div className="container">
            <div className="row justify-content-center g-3 g-md-5">
              <div className="col-md-3">
                <div className="card h-100 border-0">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h3 className={`textBrown ${style.title}`}>160+</h3>
                    
                    <div className="d-flex gap-2 align-items-center">
                      <Image src="/universities.png" width={26} height={26} className="img-fluid" alt="universities" />
                      <p className={`m-0 ${style.cardsText}`}>Universities</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 border-0">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h3 className={`textBrown ${style.title}`}>1,500+</h3>
                    
                    <div className="d-flex gap-2 align-items-center">
                      <Image src="/scholarships.png" width={26} height={26} className="img-fluid" alt="" />
                      <p className={`m-0 ${style.cardsText}`}>Scholarships</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 border-0">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h3 className={`textBrown ${style.title}`}>50,000+</h3>
                    
                    <div className="d-flex gap-1 align-items-center">
                      <Image src="/courses.png" width={26} height={26} className="img-fluid" alt="" />
                      <p className={`m-0 ${style.cardsText}`}>Courses offered</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-md-3">
                <div className="card h-100 border-0">
                  <div className="card-body d-flex flex-column align-items-center justify-content-center">
                    <h3 className={`textBrown ${style.title}`}>600,000+</h3>
                    
                    <div className="d-flex gap-1 align-items-center">
                      <Image src="/studets.png" width={26} height={26} className="img-fluid" alt="" />
                      <p className={`m-0 ${style.cardsText}`}>International students</p>
                    </div>
                  </div>

                </div>
              </div>




            </div>
          </div>
        </section>


        <section className={`${style.globalSection}`}>
          <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5 d-none d-md-block">
                <div className={`${style.globalImages}`}>
                  <Image src={"/global.png"} width={600} height={600} alt='jns' className={`${style.leftImage}`} />
                  <div className={`${style.bottomImage}`}>
                    <Image src={"/botimage.png"} width={600} height={550} alt='jns'/>
                  </div>
                </div>
              </div>

              <div className="col-md-7 mb-5 pe-3">
                <div className="card px-0 bg-transparent d-flex flex-column justify-content-center align-items-center border-0">
                  <div className="card-header bg-transparent d-flex justify-content-center gap-2 border-0 text-center">
                    <div>
                      <h1 className={`heading2`}>Why Study in the <span className={`${style.textRed}`}>U</span><span className={`${style.textPrimary}`}>K</span>?</h1>
                      <p className={`${style.smPara}`}>Why Choose the UK for Your Education?</p>
                    </div>

                    <Image src={"/UKflag.png"} width={80} height={80} alt="Uk" />
                  </div>
                  <div className={`card-body w-100 mx-0 shadow-lg rounded-4 ${style.cardBlur}`}>
                    <ul className="list-unstyled">
                    {listItems.map((item, index) => (
                      <li key={index} className={`py-3 ${style.li}`}>
                        <span className={`${style.liStyle} ${index % 2 === 0 ? style.blue : style.red}`}>{item.title}: </span>
                        <span className={`${style.liStyle} fw-light`}>{item.description}</span>
                      </li>
                    ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>


        <section className={`${style.courses}`}>
          <div className="container py-4">
            <div className="row g-3">
              <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <h1 className={`${style.headingMd} text-black`}>Explorer <span className={`${style.textRed}`}>Popular</span> <span className={`${style.textPrimary}`}>Courses</span></h1>
                <p className={`w-75 text-center ${style.lgBodyText}`}>UK universities are known for academic excellence across a wide range of fields. Discover the courses most popular among international students, and find the perfect match for your career ambitions.</p>
              </div>
              {courses.map((course,index) => (
                <div key={index} className="col-md-3">
                  <div className={`card d-flex py-5 flex-column justify-content-center align-items-center ${index === 0 ? "bgBrown" : ""}`}>
                    <Image src={course.img} width={92} height={92} alt={course.title} />
                    <h1 className={`${index === 0 ? "text-white" : "text-black"}`}>{course.title}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{backgroundColor:"#f2f0f0"}}>
          <div className="container py-5">
            <div className="row g-0">
              <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
                <h1 className={`${style.headingMd} text-black`}>Find Your <span className={`${style.textPrimary}`}>Perfect</span> <span className={`${style.textRed}`}>University</span> in the UK</h1>
                <p className={`w-75 text-center ${style.lgBodyText}`}>UK universities are known for academic excellence across a wide range of fields. Discover the courses most popular among international students, and find the perfect match for your career ambitions.</p>
                <div className="w-100 text-end px-4">
                  <Link href={"/"}>View All</Link>
                </div>
              </div>

              {universities.map((university, index) => (
                <div key={index} className="col-md-4 position-relative">
                  <div className="card p-0 border-0 bg-transparent border">
                    <div className="card-body border-0">
                      <h5 className={`card-title position-absolute ${style.custPositioned} px-3`}>{university.title}</h5>
                      <Image
                        src={`/${university.img}`}
                        alt={university.title}
                        width={300}
                        height={200}
                        className="img-thumbnail w-100 border-0"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1>Our <span className={`${style.textPrimary} ${style.headingMd}`}>Services</span> </h1>
                <p className={`${style.lgBodyText}`}>How We Help You Achieve Your Dream</p>
              </div>
            </div>
          </div>
          <Services />
        </section>

        <section style={{backgroundColor:"#f2f0f0"}}>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-12">
                <h1>Seo Content Section</h1>
                <div className={`${style.cardBg} py-2 rounded-3`}>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='cpnsultation' className={`${style.consultation} bgPrimary`}>
          <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center py-0">
              <div className="col-md-6">
                <div className="w-75">
                  <h1 className="text-white mt-5 ">Book a Consultation</h1>
                  <p className={`text-white  text-start subtitle fw-lighter`}>Expert Guidance and Personalized Support for Your Journey to Study in the UK.</p>
                  <Link className="btn bgBrown border-0 text-white" href={"/application-form"}>Book Consultation</Link>
                </div>
              </div>
              <div className="col-md-6 py-0 my-0 position-relative">
                <Image src={"/girl.png"} alt="Book a consultation" className={`img-fluid d-none d-md-block py-0 my-0 ${style.imgStyle}`} width={1035} height={700} />
              </div>
            </div>
          </div>
        </section>


        <section className={`${style.contactSection}`}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className={`card bg-transparent border-0 shadow-lg px-3 py-5 ${style.customCardBg}`}>
                  <h1 className={`text-black fw-bold`}>Have any Questions? <span className={`${style.textPrimary}`}>Contact</span> <span className={`${style.textRed}`}>Us</span></h1>
                  <p className={`subtitle text-black`}>We are here to answer your questions.</p>
                  <Formik
                      initialValues={{
                        fullName: '',
                        email: '',
                        phoneNumber: '',
                        message: ''
                      }}
                      validationSchema={validationSchema}
                      onSubmit={(values) => {
                        // Handle form submission (e.g., sending data to an API)
                        console.log('Form values:', values);
                      }}
                    >
                      {({ errors, touched }) => (
                        <Form>
                          <div className="row g-3">
                            <div className="col-md-4">
                              <Field
                                className="form-control"
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                aria-label="Full Name"
                              />
                              <ErrorMessage name="fullName" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-4 position-relative">
                              <Field
                                className="form-control px-5"
                                type="email"
                                name="email"
                                placeholder="Email"
                                aria-label="Email"
                              />
                              <Image src={"/emailIcon.png"} width={25} height={20} alt='Email Icon' className={`${style.IconStyle}`} />
                              <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-4 position-relative">
                              <Field
                                className="form-control px-5"
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                aria-label="Phone Number"
                              />
                              <Image src={"/flagicon.png"} width={25} height={20} alt='Flag Icon' className={`${style.IconStyle}`} />
                              <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-8">
                              <Field
                                as="textarea"
                                className={`form-control ${style.textArea}`}
                                name="message"
                                id="exampleFormControlTextarea1"
                                rows="8"
                                placeholder="Your Message"
                              />
                              <ErrorMessage name="message" component="div" className="text-danger" />
                            </div>
                            <div className="col-md-8 px-5 text-end">
                              <button type="submit" className="btn bgBrown text-white">
                                Send Message
                              </button>
                            </div>
                          </div>
                        </Form>
                      )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default page