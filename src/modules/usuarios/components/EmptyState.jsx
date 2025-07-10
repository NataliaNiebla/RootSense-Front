import React from 'react';
import '../../../styles/usuarios/components/EmptyState.css';

const EmptyState = ({ usuarios }) => {
    if (usuarios.length > 0) {
        return null;
    }

    return (
        <div className="empty-state">
            <p>No hay usuarios registrados en el sistema.</p>
        </div>
    );
};

export default EmptyState;
