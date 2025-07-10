import React from 'react';
import logo from '../../assets/imgs/RS_logo.png';
import '../../styles/login/LoginFormStyles.css'; 

const AuthHeader = ({ title = 'Iniciar sesión', subtitle = 'Sistema de Monitoreo de Invernadero' }) => {
    return (
        <div className="auth-header">
            <img src={logo} alt="Logo" className="logo" />
            <h1>{title}</h1>
            <p className="tagline">{subtitle}</p>
        </div>
    );
};

export default AuthHeader;
