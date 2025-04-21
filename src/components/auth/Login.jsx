import React, { useState } from 'react';
import client from '../../api/client';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await client.post('/security/login', form);
      const { token } = res.data;
      localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      alert('로그인 실패: ' + (err.response?.data?.message || err.message));
    }
  };
  
  return (
    <div style={styles.container}>
      <form onSubmit={onSubmit} style={styles.form}>
        <h2 style={styles.title}>로그인</h2>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
          required
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={onChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>로그인</button>
        
        <div style={styles.signupLink}>
          계정이 없으신가요?{' '}
          <Link to="/signup" style={styles.link}>회원가입</Link>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
  },
  form: {
    background: 'white',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  input: {
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  signupLink: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
