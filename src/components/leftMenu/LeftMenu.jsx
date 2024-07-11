import React from 'react';
import './leftMenu.css';

const LeftMenu = ({ onMenuClick }) => {
  const menuItems = ['dashboard', 'kanban', 'models', 'profile', 'settings', 'logout'];

  return (
    <div className="left-menu-container">
      <ul>
        {menuItems.map((item) => (
          <li key={item} onClick={() => onMenuClick(item)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
