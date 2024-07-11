import React from 'react';
import './centerContent.css';

const CenterContent = ({ selectedMenu }) => {
  return (
    <div className="center-content-container">
      
      <p>Content for {selectedMenu} will be displayed here.</p>
    </div>
  );
};

export default CenterContent;
