// src/components/ExampleDataViewer.jsx
import { useEffect, useState } from 'react';
import client from "../api/client";
// import { fetchExampleData } from '../api/exampleApi';

function DataViewer() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        client.get("/sample/orders")
            .then(res => setData(res.data))
            .catch(err => {
                setError(err.message);
                console.error(err);
            });
    }, []);

    if (error) return <div>에러 발생: {error}</div>;
    if (!data) return <div>로딩 중...</div>;

    return (
        <div>
            <h2>서버로부터 받은 데이터</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataViewer;
