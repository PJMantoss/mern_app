import { useState } from 'react';

const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = (url, method = 'GET', body = 'null', headers = {}) => {
        fetch(url, {
            method,
            body,
            headers
        })
    }
};