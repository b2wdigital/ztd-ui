import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './contexts/auth';
import Layout from './Layout';
import GlobalStyle from './styles/global';
import store from './store';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};
export default App;
