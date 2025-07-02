import React from 'react';
import icon from '../assets/imgs/iconpng.png'; // adjust the path if necessary
import '../styles/HeaderStyles.css';

const Header = ({ title = '', sidebarCollapsed = false }) => {
    return (
        <header 
            className={sidebarCollapsed ? 'sidebar-collapsed' : ''}
            style={{
                left: sidebarCollapsed ? '80px' : '260px',
                transition: 'left 0.3s ease'
            }}
        >
            <div className="header-general">
                <img src={icon} alt="Icon" className="icon" />
                <h1 className='header-title'>{title}</h1>
                <button className="logout-btn">
                    <a href="/login">Cerrar Sesión</a>
                </button>
            </div>
        </header>
    );
};

export default Header;

//uso de componente
// <Header title="Dashboard" sidebarCollapsed={collapsed} />