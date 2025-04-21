import client from "../api/client";

export const getToken = () => localStorage.getItem('token');

export const logout = () => {
  client.post('/api/authen/logout')
  .then(() => {
    localStorage.removeItem('token');
    alert('정상적으로 로그아웃 되었습니다.');
  })
  .catch(() => {
    alert('로그아웃 처리 중 오류가 발생했습니다.');
  })
  .finally(() => {
    window.location.href = '/login';
  })
}

export const isAuthenticated = () => !!getToken();
