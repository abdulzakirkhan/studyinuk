"use client";
import React, { useState } from 'react'; 
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Image from 'next/image'; 
import Select from 'react-select';
import style from "../../styles/footer.module.css";

const ApplicationForm = () => {
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

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    nationality: Yup.string().required('Select Your Nationality'),
    studyProgram: Yup.string().required('Select study program'),
    yearOfStudy: Yup.string().required('Select year of study'),
    message: Yup.string().required('Message is required')
  });

  // List of countries (nationalities)
  const nationalities = [
    { value: 'US', label: 'United States' },
    { value: 'IN', label: 'India' },
    { value: 'GB', label: 'United Kingdom' },
    { value: 'CA', label: 'Canada' },
    { value: 'AU', label: 'Australia' },
    // Add more countries as needed
  ];
  const studyPrograms = [
    { value: '', label: 'Select Study Program' }, // Default placeholder option
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'postgraduate', label: 'Postgraduate' },
    { value: 'phd', label: 'PhD' },
    // You can add more study programs as needed
  ];
  const yearsOfStudy = [
    { value: '', label: 'Select Study Program' }, // Default placeholder option
    { value: 'undergraduate', label: 'Undergraduate' },
    { value: 'postgraduate', label: 'Postgraduate' },
    { value: 'phd', label: 'PhD' },
    // You can add more study programs as needed
  ];
  

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-md-9">
            <div className="card border-0 rounded-4 shadow-lg">
              <div className="card-header pt-0 border-0 bg-transparent d-flex justify-content-center">
                <div className={`${style.border} bgPrimary text-white mt-0 py-2 px-5 text-center`}>
                  <h3>Book consultation</h3>
                  <p>Simply complete the form, and we’ll respond to your enquiry as soon as possible!</p>
                </div>
              </div>
              <div className="card-body px-5">
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    nationality: '',
                    subjectInterested:"",
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
                        <div className="col-md-6">
                          <Field
                            className="form-control"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            aria-label="First Name"
                          />
                          <ErrorMessage name="firstName" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                          <Field
                            className="form-control"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            aria-label="Last Name"
                          />
                          <ErrorMessage name="lastName" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-6 position-relative">
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

                        <div className="col-md-4">
                            <Field
                            name="nationality"
                            component={Select}
                            options={nationalities} placeholder="Nationality"
                            />
                          <ErrorMessage name="nationality" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-4">
                            <Field
                            name="studyProgram"
                            component={Select}
                            options={studyPrograms} placeholder="Study Program"
                            />
                          <ErrorMessage name="studyProgram" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-4">
                            <Field
                            name="yearOfStudy"
                            component={Select}
                            options={yearsOfStudy} placeholder="Year Of Study"
                            />
                          <ErrorMessage name="yearOfStudy" component="div" className="text-danger" />
                        </div>
                        <div className="col-md-4">
                            <Field
                            name="subjectInterested"
                            component={Select}
                            options={yearsOfStudy} placeholder="Subject Interested"
                            />
                          <ErrorMessage name="subjectInterested" component="div" className="text-danger" />
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
                          <button type="submit" className={`btn text-white bgPrimary px-4 py-2`}>
                            Submit
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
      </div>
    </div>
  );
};

export default ApplicationForm;
