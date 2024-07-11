import React from 'react';
import './advisorCard.css';

const AdvisorCard = ({ advisor, onSelect }) => {
  const handleSelect = () => {
    onSelect(advisor);
  };

  return (
    <div className="advisor-card">
      <img src={advisor.photo} alt={advisor.name} className="advisor-photo" />
      <h3 className="advisor-name">{advisor.name}</h3>
      <p className="advisor-description">{advisor.description}</p>
      <div className="select_advisor-btn">
        <button onClick={handleSelect}>Select Advisor</button>
      </div>
    </div>
  );
};

export default AdvisorCard;
