import React from 'react';
import styles from '../styles.jsx';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div style={styles.pagination}>
    <button
      style={{
        ...styles.paginationBtn,
        ...(currentPage === 1 ? styles.paginationDisabled : {})
      }}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>

    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index + 1}
        style={{
          ...styles.paginationBtn,
          ...(currentPage === index + 1 ? styles.paginationActive : {})
        }}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}

    <button
      style={{
        ...styles.paginationBtn,
        ...(currentPage === totalPages ? styles.paginationDisabled : {})
      }}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;