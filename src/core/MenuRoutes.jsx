import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';
import Sidebar from "../components/Sidebar";

import Dashboard from "../modules/Dashboard/Dashboard";
import Bandejas from "../modules/bandejas/Bandejas";
//import Reportes from "../modules/Reportes/Reportes";
//import Bitacora from "../modules/Bitacora/Bitacora";
//import Usuarios from "../modules/Usuarios/Usuarios";
//import Actuadores from "../modules/Actuadores/Actuadores";
//import Sensores from "../modules/Sensores/Sensores";
//import Configuracion from "../modules/Configuracion/Configuracion";

function MenuRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Sidebar />}>
                <Route index element={<Navigate to="/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="bandejas" element={<Bandejas />} />
                {/* Agregar rutas para otros componentes cuando estén disponibles */}
                {/* <Route path="reportes" element={<Reportes />} /> */}
                {/* <Route path="bitacora" element={<Bitacora />} /> */}
                {/* <Route path="usuarios" element={<Usuarios />} /> */}
                {/* <Route path="actuadores" element={<Actuadores />} /> */}
                {/* <Route path="sensores" element={<Sensores />} /> */}
                {/* <Route path="configuracion" element={<Configuracion />} /> */}
            </Route>
        </Routes>  
  );
}

export default MenuRoutes;