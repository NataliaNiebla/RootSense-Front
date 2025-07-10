import React from 'react';
import ActuadorIcon from './ActuadorIcon';

const ActuadorCard = ({ 
    actuador, 
    isSelected, 
    onCardClick, 
    onToggleEstado 
}) => {
    return (
        <div 
            className={`actuator-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onCardClick(actuador.bandeja)}
        >
            <div className="actuator-header">
                <h3 className="actuator-title">
                    <ActuadorIcon tipo={actuador.tipo} />
                    {actuador.tipo.charAt(0).toUpperCase() + actuador.tipo.slice(1)}
                </h3>
                <span className="actuator-id">ID: {actuador.id}</span>
            </div>
            
            <div className="actuator-content">
                <div className="actuator-item">
                    <span className="actuator-label">Bandeja:</span>
                    <span className="actuator-value">{actuador.bandeja}</span>
                </div>
                <div className="actuator-item">
                    <span className="actuator-label">Estado:</span>
                    <span className="actuator-value">
                        {actuador.estado.charAt(0).toUpperCase() + actuador.estado.slice(1)}
                    </span>
                </div>
            </div>
            
            <button 
                className={`btn btn-toggle ${actuador.estado === 'activo' ? 'active' : 'inactive'}`}
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleEstado(actuador.id);
                }}
            >
                {actuador.estado === 'activo' ? 'Desactivar' : 'Activar'}
            </button>
        </div>
    );
};

export default ActuadorCard;
