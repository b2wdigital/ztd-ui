import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import CommonRoutes from './common.routes';
import Layout from '../Layout';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  // Loading
  if (loading) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    );
  }
  return signed ? <Layout /> : <CommonRoutes />;
};
export default Routes;
