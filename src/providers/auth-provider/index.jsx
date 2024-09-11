import {
  createContext,
  useContext,
} from 'react';
import useAuth from './viewModel';

export const AuthManagerContext = createContext({});

const AuthManager = ({ children }) => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    setUserInfo,
    isLoading,
  } = useAuth();

  return (
    <AuthManagerContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userInfo,
        setUserInfo,
        isLoading,
      }}
    >
      {children}
    </AuthManagerContext.Provider>
  );
};

export const useContextAuthManager = () => {
  return useContext(AuthManagerContext);
};

export default AuthManager;
