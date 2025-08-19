import React, { useState } from 'react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      id: 'profile',
      name: 'Profile',
      icon: '👤'
    },
    {
      id: 'articles',
      name: 'Articles',
      icon: '📄'
    }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h1 className={`sidebar-title ${isCollapsed ? 'hidden' : ''}`}>
          Dashboard
        </h1>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isCollapsed ? '☰' : '✕'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => setActiveMenu(item.id)}
            title={isCollapsed ? item.name : ''}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className={`menu-text ${isCollapsed ? 'hidden' : ''}`}>
              {item.name}
            </span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className={`user-info ${isCollapsed ? 'collapsed' : ''}`}>
          <div className="user-avatar">JD</div>
          <div className={`user-details ${isCollapsed ? 'hidden' : ''}`}>
            <p className="user-name">John Doe</p>
            <p className="user-status">Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;