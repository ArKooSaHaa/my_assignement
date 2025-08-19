import React, { useState } from 'react';
import Sidebar from './pages/sidebar';
import './App.css';
import ProfilePage from './pages/profile.jsx/profilepage';
import ArticlesSection from './pages/aricle/articlepage.jsx';

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
          <ArticlesSection />
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