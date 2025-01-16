"use client";
import React, { useState } from 'react'

const Inputs = () => {
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
  return (
    <div className="row align-items-center justify-content-end gap-2 w-100">
      <div className="col-md-3">
        <select
          id="studyOptions1"
          name="studyOptions"
          value={selectedOption1}
          onChange={handleChange1}
          className="form-select"
        >
          <option value="studyInUK">Course</option>
          <option value="studyInUS">Course 1</option>
          <option value="studyInCanada">Course 2</option>
        </select>
      </div>

      <div className="col-md-3">
        <select
          id="studyOptions2"
          name="studyOptions"
          value={selectedOption2}
          onChange={handleChange2}
          className="form-select"
        >
          <option value="studyInUK">PostGraduate</option>
          <option value="studyInUS">Study in the US</option>
          <option value="studyInCanada">Study in Canada</option>
          <option value="studyInAustralia">Study in Australia</option>
        </select>
      </div>

      <div className="col-md-3">
        <select
          id="studyOptions3"
          name="studyOptions"
          value={selectedOption3}
          onChange={handleChange3}
          className="form-select"
        >
          <option value="studyInUK">Any University</option>
          <option value="studyInUS">Study in the US</option>
          <option value="studyInCanada">Study in Canada</option>
          <option value="studyInAustralia">Study in Australia</option>
        </select>
      </div>

      <div className="col-12 text-sm-center  col-md-2">
        <button type="button" className={`btn findBtn text-white`}>
          Find
        </button>
      </div>
</div>
  )
}

export default Inputs
