import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext';

const ProtectedRoute = (props) => {
  const authContext = React.useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <>
      {!isAuthenticated && !loading ? (
        <Navigate to="/login" />
      ) : (
        <Route {...props} />
      )}
    </>
  );
};

export default ProtectedRoute;
