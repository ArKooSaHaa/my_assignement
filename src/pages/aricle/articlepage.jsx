import React, { useState } from 'react';
import allArticles from './data';
import styles from './styles.jsx';
import ArticleGrid from './components/ArticleGrid.jsx';
import Pagination from './components/Pagination.jsx';

const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const articlesPerPage = 6;



  // Filter articles based on status
  const filteredArticles = statusFilter === 'all' 
    ? allArticles 
    : allArticles.filter(article => article.status === statusFilter);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'published':
        return { backgroundColor: '#28a745', color: 'white' };
      case 'draft':
        return { backgroundColor: '#ffc107', color: '#333' };
      default:
        return { backgroundColor: '#6c757d', color: 'white' };
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Technology': '#111',
      'Economy': '#28a745',
      'Culture': '#6f42c1',
      'Tourism': '#17a2b8',
      'Sports': '#fd7e14',
      'Environment': '#20c997',
      'Infrastructure': '#6c757d',
      'Industry': '#dc3545',
      'Education': '#e83e8c'
    };
    return colors[category] || '#333';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Articles</h1>
        <p style={styles.subtitle}>Latest news and insights from Bangladesh</p>
      </div>

      {/* Filter Buttons */}
      <div style={styles.filterContainer}>
        <button 
          style={{...styles.filterBtn, ...(statusFilter === 'all' ? styles.filterActive : {})}}
          onClick={() => handleStatusFilter('all')}
        >
          All Articles ({allArticles.length})
        </button>
        <button 
          style={{...styles.filterBtn, ...(statusFilter === 'published' ? styles.filterActive : {})}}
          onClick={() => handleStatusFilter('published')}
        >
          Published ({allArticles.filter(a => a.status === 'published').length})
        </button>
        <button 
          style={{...styles.filterBtn, ...(statusFilter === 'draft' ? styles.filterActive : {})}}
          onClick={() => handleStatusFilter('draft')}
        >
          Drafts ({allArticles.filter(a => a.status === 'draft').length})
        </button>
      </div>

      {/* Articles Grid */}
      <ArticleGrid articles={currentArticles} />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};



export default ArticlesPage;