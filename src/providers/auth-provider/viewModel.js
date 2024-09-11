import { useEffect, useState } from 'react';
import { getTokenFromCookie } from '../../utils/cookieUtils';
import { userApi } from '../../api/apiServices';

const useAuth = () => {
  const [userInfo, setUserInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(getTokenFromCookie() ? true : false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');
    // Define an async function inside useEffect
    const fetchUserDetails = async () => {
      try {
        const response = await userApi.getUserDetails();
        if (response) {
          setIsLoading(false);
          setUserInfo(response)
          // Handle the response (e.g., set state)
        }
      } catch (error) {
        setError("Error fetching user details:", error)
      }
    };

    // Call the async function
    fetchUserDetails();
  }, []); // Empty dependency array to only run on mount

  return {
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    setUserInfo,
    isLoading,
    error
  };
};

export default useAuth;
