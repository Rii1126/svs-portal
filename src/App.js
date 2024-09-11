import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import { getTokenFromCookie } from "./utils/cookieUtils";
import Main from "./pages/Main";
import Forgotpassword from "./components/Forgotpassword/Forgotpassword";
import AuthManager from "./providers/auth-provider";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to check authentication status
  const checkAuthStatus = () => {
    const token = getTokenFromCookie();
    setIsAuthenticated(!!token); // Set to true if token exists, false otherwise
    setLoading(false);
  };

  // Check auth status when the app loads
  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Sign In route */}
        <Route
          path="/signin"
          element={<Signin onLoginSuccess={checkAuthStatus} />} // Passing the checkAuthStatus function to trigger auth status update
        />

        {/* Forgot Password route */}
        <Route path="/forgotpassword" element={<Forgotpassword />} />

        {/* Sign Up route */}
        <Route path="/signup" element={<Signup />} />

        {/* Main app routes, only accessible if authenticated */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <AuthManager>
                <Main />
              </AuthManager>
            ) : (
              <Navigate to="/signin" />
            )
          }
        />

        {/* Redirect root to sign in or main dashboard based on authentication */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/overview" />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
