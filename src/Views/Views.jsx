import React from 'react';
import { HomePage, ErrorPage } from '../routes';
import { Routes, Route } from 'react-router-dom';
import './Views.scss';
import { Layout } from '../components';

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* For 404 error page via route */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Views;
