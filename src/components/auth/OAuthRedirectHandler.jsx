import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuthRedirectHandler = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');

        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [searchParams, navigate]);

    return <div>로그인 처리 중...</div>;
};

export default OAuthRedirectHandler;
