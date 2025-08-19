import React, { useState } from 'react';
import styles from './styles.jsx';
import AvatarSection from './sections/avatarsection.jsx';
import StatsSection from './sections/statssection.jsx';
import InfoSection from './sections/infosection.jsx';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Arko Saha",
    email: "arko.saha@gmail.com",
    joiningDate: "March 15, 2025",
    role: "React Developer",
    location: "Bangladesh - Dhaka",
    bio: "Passionate frontend developer and love to create beautiful and functional web applications.",
    profilePicture: null
  });

  const [editData, setEditData] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditData(profile);
  };

  const handleSave = () => {
    setProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(profile);
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (isEditing) {
          setEditData(prev => ({
            ...prev,
            profilePicture: e.target.result
          }));
        } else {
          setProfile(prev => ({
            ...prev,
            profilePicture: e.target.result
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const stats = {
    articlesPublished: 24,
    totalViews: 15670,
    followers: 432,
    following: 189
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <AvatarSection 
          profile={isEditing ? editData : profile} 
          handleImageUpload={handleImageUpload}
        />

        <InfoSection
          isEditing={isEditing}
          profile={profile}
          editData={editData}
          handleChange={handleChange}
          handleSave={handleSave}
          handleCancel={handleCancel}
          handleEdit={handleEdit}
        />

        <StatsSection stats={stats} />
      </div>
    </div>
  );
};



export default ProfilePage;