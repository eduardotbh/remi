import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftMenu from '../leftMenu/LeftMenu';
import CenterContent from '../centerContent/CenterContent';
import RightMenu from '../rightMenu/RightMenu';
import './dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { advisor } = location.state || {};

  return (
    <div className="dashboard-container">
      <div className="left-menu">
        <LeftMenu />
      </div>
      <div className="center-content">
        <CenterContent />
      </div>
      <div className="right-menu">
        {advisor && (
          <div className="advisor-details">
            <h2>{advisor.name}</h2>
            <p>{advisor.description}</p>
            {/* Add more details or components related to the advisor */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
