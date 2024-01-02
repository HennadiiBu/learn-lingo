import { HOME_ROUTE } from '../config/routes';
import { selectUserAuthention } from '../../redux/auth/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, redirectTo = HOME_ROUTE }) => {
  const authenticatied = useSelector(selectUserAuthention);

  return authenticatied ? children : <Navigate to={redirectTo} replace />;
};