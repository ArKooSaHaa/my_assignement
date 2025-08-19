import React, { useState } from 'react';
import Sidebar from './pages/sidebar';
import './App.css';
import ProfilePage from './pages/profile.jsx/profilepage';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('profile');

  const renderContent = () => {
    switch(activeMenu) {
      case 'profile':
        return (
            <ProfilePage/>
        );
      case 'articles':
        return (
          <div className="content-section">
              <h3>articles</h3>
          </div>
        );
      default:
        return <div className="content-section"><h2>Welcome</h2></div>;
    }
  };

  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default App;