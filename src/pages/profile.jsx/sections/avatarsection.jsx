import styles from '../styles.jsx';

const AvatarSection = ({ profile, handleImageUpload }) => {
  return (
    <div style={styles.avatarSection}>
      <div style={styles.avatarContainer}>
        <div style={styles.avatar}>
          {profile.profilePicture ? (
            <img 
              src={profile.profilePicture} 
              alt="Profile" 
              style={styles.profileImage}
            />
          ) : (
            profile.fullName.split(' ').map(n => n[0]).join('')
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={styles.hiddenInput}
          id="profile-upload"
        />
        <label htmlFor="profile-upload" style={styles.uploadLabel}>
          📷 Edit Photo
        </label>
      </div>
    </div>
  );
}
export default AvatarSection;