import React from 'react';
import './rightMenu.css';

const RightMenu = ({ advisor }) => {
  if (!advisor) return null;

  return (
    <div className="right-menu-container">
      <img src={advisor.photo} alt={advisor.name} className="advisor-photo" />
      <h3>{advisor.name}</h3>
      <button className="message-icon">📧</button>
      <div className="task-list">
        <h4>Tasks</h4>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
      </div>
    </div>
  );
};

export default RightMenu;
