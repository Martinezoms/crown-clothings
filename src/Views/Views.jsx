import React from 'react';
import { HomePage, ErrorPage } from '../routes';
import { Routes, Route } from 'react-router-dom';
import './Views.scss';
import { Layout, SignIn, SignUp } from '../components';

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        {/* For user authentication (signin/signup) */}
        <Route path="user">
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Route>

      {/* For 404 error page via route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Views;
