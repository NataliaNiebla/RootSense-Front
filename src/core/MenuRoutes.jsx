import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import Sidebar from "../components/Sidebar";

import Dashboard from "../modules/Dashboard/Dashboard";
import Bandejas from "../modules/bandejas/Bandejas";
import Reportes from "../modules/reportes/Reportes";
import Bitacora from "../modules/bitacora/Bitacora";
import Usuarios from "../modules/usuarios/GestionUsuarios";
import Actuadores from "../modules/actuadores/Actuadores";
import Sensores from "../modules/sensores/Sensores";
import Configuracion from "../modules/config/Configuracion";

function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bandejas" element={<Bandejas />} />
                <Route path="reportes" element={<Reportes />} />
                <Route path="bitacora" element={<Bitacora />} /> 
                <Route path="usuarios" element={<Usuarios />} /> 
                <Route path="actuadores" element={<Actuadores />} /> 
                <Route path="sensores" element={<Sensores />} /> 
                <Route path="configuracion" element={<Configuracion />} /> 
            </Route>
        </Routes>  
  );
}

export default MenuRoutes;