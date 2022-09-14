import loadable from '@loadable/component';
import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import NotFound404Page from '../pages/CommonPages/NotFound404Page/NotFound404Page';
import MainLayout from '../pages/PortalPages/MainLayout/MainLayout';

const DashboardPage = loadable(() => import('../pages/PortalPages/DashboardPage/DashboardPage'), {
  fallback: <Loader />,
});
const AboutUsPage = loadable(() => import('../pages/PortalPages/AboutUsPage/AboutUsPage'));
const ContactsPage = loadable(() => import('../pages/PortalPages/ContactsPage/ContactsPage'));

function RBRoutes(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RBRoutes;
