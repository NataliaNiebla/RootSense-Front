import React from 'react';
import icon from '../assets/imgs/iconpng.png'; 
import '../styles/components/HeaderStyles.css';
import { useSidebar } from '../hooks/useSidebar';
import HeaderButton from './HeaderButton';

const Header = ({ title = '' }) => {
    const { collapsed } = useSidebar();
    
    return (
        <header 
            className={collapsed ? 'sidebar-collapsed' : ''}
            style={{
                left: collapsed ? '80px' : '240px',
                transition: 'left 0.3s ease'
            }}
        >
            <div className="header-general">
                <img src={icon} alt="Icon" className="icon" />
                <h1 className='header-title'>{title}</h1>
                <HeaderButton />
            </div>
        </header>
    );
};

export default Header;

//uso de componente
// <Header title="Dashboard" />