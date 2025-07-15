import React from 'react';

const ButtonAction = ({ estado, onClick }) => {
    return (
        <button 
            className={`btn btn-toggle ${estado === 'activo' ? 'active' : 'inactive'}`}
            onClick={onClick}
        >
            {estado === 'activo' ? 'Desactivar' : 'Activar'}
        </button>
    );
};

export default ButtonAction;
