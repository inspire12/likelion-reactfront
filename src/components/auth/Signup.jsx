import React, { useState } from 'react';
import client from '../../api/client';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    passwordConfirm: ''
  });
  
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();
  
  const onChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (name === 'password' || name === 'passwordConfirm') {
      setPasswordMatch(nextForm.password === nextForm.passwordConfirm);
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!passwordMatch) {
      return alert('비밀번호가 일치하지 않습니다.');
    }
    
    try {
      await client.post('/security/signup', {
        username: form.username,
        password: form.password
      });
      alert('회원가입 완료! 로그인 해주세요.');
      navigate('/login');
    } catch (err) {
      alert('회원가입 실패: ' + (err.response?.data?.message || err.message));
    }
  };
  
  return (
    <div style={styles.container}>
      <form onSubmit={onSubmit} style={styles.form}>
        <h2 style={styles.title}>회원가입</h2>
        
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
        
        <input
          name="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          value={form.passwordConfirm}
          onChange={onChange}
          required
          style={{
            ...styles.input,
            borderColor: passwordMatch ? '#ccc' : 'red'
          }}
        />
        
        {!passwordMatch && (
          <div style={styles.warning}>비밀번호가 일치하지 않습니다.</div>
        )}
        
        <button type="submit" style={styles.button}>가입하기</button>
        
        <div style={styles.loginLink}>
          이미 계정이 있으신가요?{' '}
          <Link to="/login" style={styles.link}>로그인</Link>
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
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  warning: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  loginLink: {
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
