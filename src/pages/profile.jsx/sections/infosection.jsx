import React from 'react';
import styles from '../styles.jsx';

const InfoSection = ({
  isEditing,
  profile,
  editData,
  handleChange,
  handleSave,
  handleCancel,
  handleEdit
}) => (
  <div style={styles.infoSection}>
    {isEditing ? (
      <div style={styles.editForm}>
        <input
          style={styles.input}
          value={editData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          placeholder="Full Name"
        />
        <input
          style={styles.input}
          value={editData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          style={styles.input}
          value={editData.role}
          onChange={(e) => handleChange('role', e.target.value)}
          placeholder="Role"
        />
        <input
          style={styles.input}
          value={editData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="Location"
        />
        <textarea
          style={styles.textarea}
          value={editData.bio}
          onChange={(e) => handleChange('bio', e.target.value)}
          placeholder="Bio"
          rows="3"
        />
        <div style={styles.buttonGroup}>
          <button style={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
          <button style={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    ) : (
      <div style={styles.displayInfo}>
        <h1 style={styles.name}>{profile.fullName}</h1>
        <p style={styles.role}>{profile.role}</p>
        <p style={styles.email}>{profile.email}</p>
        <p style={styles.detail}>📍 {profile.location}</p>
        <p style={styles.detail}>📅 Joined {profile.joiningDate}</p>
        <p style={styles.bio}>{profile.bio}</p>
        <button style={styles.editBtn} onClick={handleEdit}>
          Edit Profile
        </button>
      </div>
    )}
  </div>
);

export default InfoSection;