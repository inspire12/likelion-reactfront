import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OAuthRedirectHandler = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        
        if (token) {
            localStorage.setItem('token', token);
            navigate('/');
        } else if (error) {
            alert(`로그인 실패: ${error}`);
            navigate('/login');    // 에러 있으면 로그인 페이지로 복귀
        } else {
            navigate('/login');
        }
    }, [searchParams, navigate]);

    return <div>로그인 처리 중...</div>;
};

export default OAuthRedirectHandler;
