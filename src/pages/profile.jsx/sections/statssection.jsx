import React from 'react';
import styles from '../styles.jsx';

const StatsSection = ({ stats }) => (
  <div style={styles.statsSection}>
    <div style={styles.stat}>
      <div style={styles.statNumber}>{stats.articlesPublished}</div>
      <div style={styles.statLabel}>Articles</div>
    </div>
    <div style={styles.stat}>
      <div style={styles.statNumber}>{stats.totalViews.toLocaleString()}</div>
      <div style={styles.statLabel}>Views</div>
    </div>
    <div style={styles.stat}>
      <div style={styles.statNumber}>{stats.followers}</div>
      <div style={styles.statLabel}>Followers</div>
    </div>
    <div style={styles.stat}>
      <div style={styles.statNumber}>{stats.following}</div>
      <div style={styles.statLabel}>Following</div>
    </div>
  </div>
);

export default StatsSection;