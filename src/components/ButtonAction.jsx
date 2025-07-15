import React from 'react';
import '../styles/components/ContentLayoutStyles.css';

const ButtonAction = ({ estado, onClick }) => {
    return (
        <button 
            className={`btn-action ${estado === 'activo' ? 'active' : 'inactive'}`}
            onClick={onClick}
        >
            {estado === 'activo' ? 'Desactivar' : 'Activar'}
        </button>
    );
};

export default ButtonAction;
