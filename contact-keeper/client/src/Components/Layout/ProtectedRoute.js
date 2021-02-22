import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext';

const ProtectedRoute = (props) => {
  const authContext = React.useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  if (isAuthenticated && !loading) return <Route {...props} />;
  else if (!isAuthenticated && !loading) return <Navigate to="/login" />;
  return null;
};

export default ProtectedRoute;
