import { useEffect, useState } from "react";

export const useAuth = () => {
    //Login state
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
}