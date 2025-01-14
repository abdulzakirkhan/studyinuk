import React, { useState } from 'react';

const Accordion = () => {
  const accordion = [
    { id: 1, title: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 2, title: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 3, title: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 4, title: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 5, title: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
  ];

  const accordionBody = [
    { id: 1, description: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 2, description: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 3, description: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 4, description: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
    { id: 5, description: `Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit. Lorem ipsum dolor sit amet consectetur. Eu arcu malesuada pretium turpis amet consequat pharetra nibh sit.` },
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
    <div className="accordion" id="accordionExample">
      {accordion.map((item, index) => {
        const isOpen = selectedUniversityId === item.id;
        const bodyContent = accordionBody.find((body) => body.id === item.id)?.description;

        return (
          <div key={item.id} className="accordion-item accorBtn border-0 border-bottom">
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={() => handleUniversityClick(item.id)}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={isOpen ? 'true' : 'false'}
                aria-controls={`collapse${item.id}`}
              >
                {item.title}
              </button>
            </h2>
            <div id={`collapse${item.id}`} className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`} aria-labelledby={`heading${item.id}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                {bodyContent}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
