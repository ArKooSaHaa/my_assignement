const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#333',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '40px',
    maxWidth: '900px',
    width: '100%',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    gap: '40px',
    alignItems: 'flex-start'
  },
  avatarSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '120px'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  avatar: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    overflow: 'hidden',
    position: 'relative'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  hiddenInput: {
    display: 'none'
  },
  uploadLabel: {
    fontSize: '0.9rem',
    color: '#666',
    cursor: 'pointer',
    padding: '5px 10px',
    border: '1px solid #666',
    borderRadius: '3px',
    textAlign: 'center',
    transition: 'background-color 0.2s ease'
  },
  infoSection: {
    flex: 1
  },
  displayInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  name: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    margin: '0 0 5px 0'
  },
  role: {
    fontSize: '1.2rem',
    color: '#666',
    fontWeight: '500',
    margin: '0 0 10px 0'
  },
  email: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 0 15px 0'
  },
  detail: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 0 8px 0'
  },
  bio: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.5',
    margin: '15px 0 20px 0'
  },
  editBtn: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  editForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    border: '2px solid #666',
    borderRadius: '5px',
    fontSize: '1rem',
    color: '#333'
  },
  textarea: {
    padding: '10px',
    border: '2px solid #666',
    borderRadius: '5px',
    fontSize: '1rem',
    color: '#333',
    resize: 'vertical',
    minHeight: '80px'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px'
  },
  saveBtn: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  cancelBtn: {
    backgroundColor: '#666',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  statsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '120px'
  },
  stat: {
    textAlign: 'center',
    padding: '15px',
    border: '2px solid #666',
    borderRadius: '5px'
  },
  statNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#666'
  }};
  export default styles;