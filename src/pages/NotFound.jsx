import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>404 - 페이지를 찾을 수 없음</h2>
    <Link to="/" style={styles.link}>홈으로 돌아가기</Link>
  </div>
);

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '80px',
    color: '#333'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  link: {
    color: '#4A90E2',
    fontSize: '1.1rem',
    textDecoration: 'none'
  }
};

export default NotFound;
