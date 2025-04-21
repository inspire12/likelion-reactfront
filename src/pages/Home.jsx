import { useEffect, useState } from 'react';
import client from '../api/client';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth';

const Home = (user) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>🚀 React + OAuth2 로그인</h1>
      </header>
      
      <section style={styles.content}>
        {user ? (
          <>
            <h2 style={styles.greeting}>
              👋 안녕하세요, <span style={styles.username}>{user.username}</span> 님!
            </h2>
            <div style={styles.userInfo}>
              <p>🗂️ <strong>권한:</strong> {user.roles.join(', ')}</p>
              <p>✅ 현재 로그인 상태입니다.</p>
            </div>
          </>
        ) : (
          <p>⏳ 사용자 정보를 불러오는 중...</p>
        )}
        
        <button style={styles.logoutButton} onClick={handleLogout}>
          🔒 로그아웃
        </button>
      </section>
      
      <footer style={styles.footer}>
        <p>© 2024 My OAuth2 React App</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '50px auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  header: {
    backgroundColor: '#4A90E2',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.8rem',
  },
  content: {
    padding: '30px',
    textAlign: 'center',
  },
  greeting: {
    fontSize: '1.4rem',
    marginBottom: '15px',
  },
  username: {
    color: '#4A90E2',
  },
  userInfo: {
    fontSize: '1.1rem',
    backgroundColor: '#F7F9FC',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '25px',
  },
  logoutButton: {
    padding: '12px 25px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  footer: {
    backgroundColor: '#f0f4f8',
    color: '#777',
    padding: '15px',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

export default Home;
