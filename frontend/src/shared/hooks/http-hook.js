import { useState } from 'react';

const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const sendRequest = async (url, method = 'GET', body = 'null', headers = {}) => {
        const response = await fetch(url, {
            method,
            body,
            headers
        })
    }
};