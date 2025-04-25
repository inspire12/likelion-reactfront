import React from 'react';

const Login = () => {
  
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost/oauth2/authorization/google';
  };
  
  const handleKakaoLogin = () => {
    window.location.href = 'http://localhost/oauth2/authorization/kakao';
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>로그인 🚀</h2>
        <p style={styles.subtitle}>소셜 계정으로 간편하게 로그인하세요.</p>
        
        <button style={styles.googleButton} onClick={handleGoogleLogin}>
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="google"
            style={styles.icon}
          />
          구글로 로그인하기
        </button>
        
        <button style={styles.kakaoButton} onClick={handleKakaoLogin}>
          <img
            src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png"
            alt="kakao"
            style={styles.kakaoIcon}
          />
        </button>
      </div>
      
      <footer style={styles.footer}>
        <p>© 2024 My OAuth2 React App</p>
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
  },
  title: {
    marginBottom: '10px',
    fontSize: '1.8rem',
    color: '#333',
  },
  subtitle: {
    marginBottom: '30px',
    color: '#777',
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    marginBottom: '15px',
    width: '100%',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  },
  kakaoButton: {
    padding: 0,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    width: '100%',
  },
  kakaoIcon: {
    width: '100%',
    maxWidth: '222px',
    height: 'auto',
  },
  footer: {
    marginTop: '20px',
    color: '#777',
    fontSize: '0.9rem',
  },
};

export default Login;
