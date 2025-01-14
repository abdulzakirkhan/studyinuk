"use client";
import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import style from "../../styles/contactus.module.css"
import Image from 'next/image';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name should be at least 3 characters long'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 characters long'),
})

const page = () => {
  return (
    <>
      <section className="d-flex">
        <div className="container mt-5 py-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <h1 className="fw-semibold">
                <span className="textPrimary">Contact</span>{' '}
                <span className="textBrown">US</span>
              </h1>
              <p>We are here to answer your questions.</p>
              <Formik
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                // Handle form submission
                console.log('Form submitted', values)
                setSubmitting(false)
              }}
            >
              {({ isSubmitting }) => (
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
                        <ErrorMessage name="firstName" component="div" className="text-danger" />
                      </div>
                      <div className="col-md-4 position-relative">
                        <Field
                          className="form-control px-5"
                          type="email"
                          name="email"
                          placeholder="Email"
                          aria-label="Email"
                        />
                        <Image src={"/emailIcon.png"} width={25} height={20} alt="Email Icon" className={style.IconStyle} />
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
                        <Image src={"/flagicon.png"} width={25} height={20} alt="Flag Icon" className={style.IconStyle} />
                        <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
                      </div>
                    

                      <div className="col-md-12">
                        <Field
                          as="textarea"
                          className={`form-control ${style.textArea}`}
                          name="message"
                          id="exampleFormControlTextarea1"
                          rows="8"
                          placeholder="Additional Information"
                        />
                        <ErrorMessage name="message" component="div" className="text-danger" />
                      </div>
                      <div className="col-md-12 text-center">
                        <button type="button" className={`btn text-white bgBrown px-4 py-2`}>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              )}
            </Formik>
            </div>
          </div>
        </div>
        <div className={`${style.heroBg} d-none d-md-block`}>

        </div>  
      </section>

      <section>
        <div className="container mt-5">
            <div className="row justify-content-center align-content-center align-items-center">
                <div className="col-md-6">
                    <div className={`card border-0 ${style.customBorder}`}>
                        <div className="card-body">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13286.484545772655!2d73.0543432601317!3d33.64106417302986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df94df4757096d%3A0x4a21728543b52192!2sSatellite%20Town%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1736828117178!5m2!1sen!2s" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100"></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 d-flex flex-column align-items-start text-start">
                    <h1>Location</h1>
                    <ul className="list-unstyled d-flex flex-column justify-content-start align-items-start py-4">
                        <li className="d-flex justify-content-center align-items-center gap-2 py-1">
                            <Image src={"/bluemap.png"} width={15} height={15} alt='location' className=""  style={{color:"#153d96"}} />
                            <span className="text-black text-decoration-none ">Unit 21, Skyline Village, Canary Wharf. London E14 9TS</span>
                        </li>
                        <li className="d-flex justify-content-center align-items-center gap-2 py-1">
                            <Image src={"/Icons (8).png"} width={15} height={15} alt='Call' className="mt-1" />
                            <span className="text-black text-decoration-none">+9203323434123</span>
                        </li>
                        <li className="d-flex justify-content-center align-items-center gap-2 py-1">
                            <Image src={"/Icons (6).png"} width={15} height={15} alt='Call' className="mt-1" />
                            <span className="text-black text-decoration-none">studyinuk@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>


    </>
  )
}

export default page
