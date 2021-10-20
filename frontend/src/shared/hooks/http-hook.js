import { useState } from 'react';

const useHttpClient = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
};