import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './modules/login/LoginForm';
import ForgotPass from './modules/login/ForgotPass';
import MenuRoutes from './core/MenuRoutes';
// Puedes seguir agregando más como Home, Dashboard, etc.

function RoutesApp() {
    return (
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPass />} />

         <Route path="/*" element={<MenuRoutes />} />
         
        </Routes>
    );
}

export default RoutesApp;
