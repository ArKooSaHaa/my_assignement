const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    padding: '30px',
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
  },
  header: {
    marginBottom: '40px',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#333',
    fontWeight: '400'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '40px'
  },
  filterBtn: {
    padding: '10px 20px',
    border: '2px solid #dee2e6',
    borderRadius: '25px',
    backgroundColor: 'white',
    color: '#333',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.2s ease'
  },
  filterActive: {
    backgroundColor: '#333',
    color: 'white',
    borderColor: '#333'
  },
  articlesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  articleCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  },
  articleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '15px'
  },
  articleMeta: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  categoryTag: {
    padding: '4px 12px',
    borderRadius: '20px',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '600'
  },
  statusPill: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  articleDate: {
    fontSize: '0.9rem',
    color: '#666'
  },
  articleTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '12px',
    lineHeight: '1.4'
  },
  articleExcerpt: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  articleFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  authorInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  authorAvatar: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  authorName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#333'
  },
  readTime: {
    fontSize: '0.8rem',
    color: '#666'
  },
  articleViews: {
    fontSize: '0.9rem',
    color: '#666'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '50px'
  },
  paginationBtn: {
    padding: '10px 15px',
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    backgroundColor: 'white',
    color: '#333',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease'
  },
  paginationActive: {
    backgroundColor: '#666',
    color: 'white',
    borderColor: '#333'
  },
  paginationDisabled: {
    opacity: '0.5',
    cursor: 'not-allowed'
  }
};
export default styles;