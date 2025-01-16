"use client";
import React, { useState } from 'react';
import style from "../../styles/universities.module.css";
import Inputs from '@/component/Inputs';
import Image from 'next/image';

const Page = () => {
  // Universities data (courses and details for each program)
  const universitiesData = [
    { id: 1, title: "Advanced Aerospace Engineering", intake: "Sept 2025", degree: "MSc" },
    { id: 2, title: "Advanced Aerospace Engineering", intake: "Sept 2025", degree: "MSc" },
    { id: 3, title: "Advanced Aerospace Engineering", intake: "Sept 2025", degree: "MSc" },
    { id: 4, title: "Advanced Aerospace Engineering", intake: "Sept 2025", degree: "MSc" },
  ];

  // List of universities
  const universities = [
    { id: 1, name: 'University of Liverpool', ranked: "23", courses: "2", img: "uni1.png", data: universitiesData },
    { id: 2, name: 'University of Cambridge', ranked: "1", courses: "10", img: "uni2.png", data: universitiesData },
    { id: 3, name: 'University of Oxford', ranked: "2", courses: "15", img: "uni1.png", data: universitiesData },
  ];

  const [selectedUniversityId, setSelectedUniversityId] = useState(null);

  const handleUniversityClick = (universityId) => {
    if (selectedUniversityId === universityId) {
      setSelectedUniversityId(null);
    } else {
      setSelectedUniversityId(universityId);
    }
  };

  return (
    <>
      <div className={`${style.heroBg}`}>
        <div className="container py-4">
          <div className="row py-md-5 mt-3 mt-md-5">
            <div className="col-md-12">
              <div className="w-80 m-auto">
                <h3 className="text-white heading2">Study in the UK: Explore All Universities in the UK</h3>
                <p className="text-white text-center">Welcome to your guide to UK universities! Studying in the United Kingdom offers a rich academic experience with a global reputation for quality education, world-class facilities, and diverse, multicultural campuses. This page provides details on all UK universities, helping you find the right institution to achieve your academic and career goals. Whether you’re seeking traditional universities steeped in history, research-intensive institutions, or modern campuses with a focus on innovation, the UK has something for every student.</p>
              </div>
            </div>
            <div className="col-12 justify-content-center text-center pt-sm-0 pt-md-5 mt-md-2">
              <Inputs />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Your Search Results</h3>
            <button className="btn bgBrown applyBtn text-white">Apply Filters</button>
          </div>

          {/* Accordion for universities */}
          <div className="col-md-8">
          <div className="accordion" id="universityAccordion">
            {universities.map((univer) => (
              <div key={univer.id} className={`accordion-item py-2 border-0 bg-transparent ${style.bgTransparent}`}>
                <h2 className="accordion-header" id={`heading${univer.id}`}>
                  <button
                    type="button"
                    className={`accordion-button ${style.accorBtn} shadow-lg d-flex justify-content-between`}
                    onClick={() => handleUniversityClick(univer.id)}
                    aria-expanded={selectedUniversityId === univer.id ? "true" : "false"}
                    aria-controls={`collapse${univer.id}`}
                  >
                    <div className="d-flex gap-2">
                      <Image src={`/${univer.img}`} width={60} height={60} alt={`${univer.name}`} />
                      <div className="">
                        <h5 className="textPrimary">{univer.name}</h5>
                        <p className="text-start">
                          <span>Ranking: {univer.ranked}</span>
                          <span className="textBrown"> Courses: {univer.courses}</span>
                        </p>
                      </div>
                    </div>
                    {/* Custom Arrow (Hidden by default and only shown when needed) */}
                    <div className="ms-auto">
                      <Image
                        src={selectedUniversityId === univer.id ? '/close.png' : '/open.png'} 
                        width={18.67} 
                        height={10.67} 
                        alt={selectedUniversityId === univer.id ? '' : ''}
                        className="custom-accordion-arrow"
                      />
                    </div>
                  </button>
                </h2>
                <div
                  id={`collapse${univer.id}`}
                  className={`accordion-collapse collapse ${selectedUniversityId === univer.id ? 'show' : ''}`}
                  aria-labelledby={`heading${univer.id}`}
                  data-bs-parent="#universityAccordion"
                >
                  <div className="accordion-body shadow-lg">
                    {/* Table of available programs */}
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Program Title</th>
                            <th>Intake</th>
                            <th>Degree</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {univer.data.map((program) => (
                            <tr key={program.id}>
                              <td>{program.title}</td>
                              <td>{program.intake}</td>
                              <td>{program.degree}</td>
                              <td>
                                <button type="button" className="btn bgPrimary text-white">Enquire Now</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    </>
  );
};

export default Page;
