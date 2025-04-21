import React, { useState } from 'react';
import client from '../../api/client';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('ROLE_USER');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post('/signup', { username, password, role });
      setMessage('🎉 회원가입 성공! 2초 후 로그인 페이지로 이동합니다.');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setMessage(err.response?.data?.error || '🚨 회원가입 실패');
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>회원가입 ✍️</h2>
        <form onSubmit={handleSignup} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="이메일"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <select
            style={styles.input}
            value={role}
            onChange={e => setRole(e.target.value)}
          >
            <option value="ROLE_USER">ROLE_USER</option>
            <option value="ROLE_ADMIN">ROLE_ADMIN</option>
          </select>
          <button style={styles.button} type="submit">가입하기</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
      <footer style={styles.footer}>
        © 2024 My OAuth2 React App
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '320px'
  },
  title: {
    marginBottom: '20px',
    fontSize: '1.6rem',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '12px',
    backgroundColor: '#4A90E2',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  message: {
    marginTop: '15px',
    color: '#ff5252'
  },
  footer: {
    marginTop: '20px',
    color: '#777',
    fontSize: '0.9rem',
  },
};

export default Signup;
