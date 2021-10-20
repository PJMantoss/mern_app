import { useState, useCallback, useRef } from 'react';

const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    const sendRequest = useCallback(
        async (url, method = 'GET', body = 'null', headers = {}) => {
            setIsLoading(true);
            const httpAbortCtlr = new AbortController();
            activeHttpRequests.current.push(httpAbortCtlr);
            try{
                const response = await fetch(url, {
                    method,
                    body,
                    headers
                });
        
                const responseData = await response.json();
                         
                if(!response.ok){
                    throw new Error(responseData.message);
                }
            }catch(err){
                setError(err.message);
            }
    
            setIsLoading(false);
        }, []
    );

    const clearError = () => {
        setError(null);
    }

    return { isLoading, error, sendRequest }
};