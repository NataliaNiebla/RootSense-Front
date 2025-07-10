import React from 'react';

const BandejaDetailsPanel = ({ 
    bandeja, 
    isActive, 
    onClose 
}) => {
    if (!isActive || !bandeja) {
        return null;
    }

    return (
        <div className="details-panel active">
            <div className="details-header">
                <h3 className="details-title">Detalles de la Bandeja</h3>
                <button className="details-close" onClick={onClose}>
                    ×
                </button>
            </div>
            <div className="details-content">
                <div className="details-item">
                    <span className="details-label">ID Bandeja</span>
                    <span className="details-value">{bandeja.id}</span>
                </div>
                <div className="details-item">
                    <span className="details-label">Nombre</span>
                    <span className="details-value">{bandeja.nombre}</span>
                </div>
                <div className="details-item">
                    <span className="details-label">Ubicación</span>
                    <span className="details-value">{bandeja.ubicacion}</span>
                </div>
                <div className="details-item">
                    <span className="details-label">Tipo de Semilla</span>
                    <span className="details-value">{bandeja.semilla}</span>
                </div>
            </div>
        </div>
    );
};

export default BandejaDetailsPanel;
