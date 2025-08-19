import React from 'react';
import styles from '../styles.jsx';

const getCategoryColor = (category) => {
  const colors = {
    'Technology': '#333',               
    'Economy': '#084c5a',               
    'Culture': '#7f4bc7',               
    'Tourism': '#1e8a9f',               
    'Sports': '#f56b00',                
    'Environment': '#7a6211',           
    'Infrastructure': '#5e6366',      
    'Industry': '#e23b45',              
    'Education': '#d93f8a'              

  };
  return colors[category] || '#333';
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

const ArticleGrid = ({ articles }) => (
  <div style={styles.articlesGrid}>
    {articles.map((article) => (
      <div key={article.id} style={styles.articleCard}>
        <div style={styles.articleHeader}>
          <div style={styles.articleMeta}>
            <span
              style={{
                ...styles.categoryTag,
                backgroundColor: getCategoryColor(article.category)
              }}
            >
              {article.category}
            </span>
            <span
              style={{
                ...styles.statusPill,
                ...getStatusStyle(article.status)
              }}
            >
              {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
            </span>
          </div>
          <div style={styles.articleDate}>{article.date}</div>
        </div>

        <h3 style={styles.articleTitle}>{article.title}</h3>
        <p style={styles.articleExcerpt}>{article.excerpt}</p>

        <div style={styles.articleFooter}>
          <div style={styles.authorInfo}>
            <div style={styles.authorAvatar}>
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div style={styles.authorName}>{article.author}</div>
              <div style={styles.readTime}>{article.readTime}</div>
            </div>
          </div>
          <div style={styles.articleViews}>
            👁️ {article.views} views
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ArticleGrid;