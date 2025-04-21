import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../../api/client';

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    client.get('/me')
    .then(res => {
      setUser(res.data);
      setLoading(false);
    })
    .catch(() => {
      navigate('/login');
    });
  }, [navigate]);
  
  if (loading) return <div>로딩 중...</div>;
  
  return typeof children === 'function' ? children(user) : children;
}
