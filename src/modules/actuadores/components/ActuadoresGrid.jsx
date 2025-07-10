import React from 'react';
import ActuadorCard from './ActuadorCard';

const ActuadoresGrid = ({ 
    actuadores, 
    actuadorSeleccionado, 
    onCardClick, 
    onToggleEstado 
}) => {
    if (actuadores.length === 0) {
        return (
            <div className="empty-state">
                <p>No hay actuadores registrados en el sistema.</p>
            </div>
        );
    }

    return (
        <div className="actuator-grid">
            {actuadores.map(actuador => (
                <ActuadorCard
                    key={actuador.id}
                    actuador={actuador}
                    isSelected={actuadorSeleccionado === actuador.bandeja}
                    onCardClick={onCardClick}
                    onToggleEstado={onToggleEstado}
                />
            ))}
        </div>
    );
};

export default ActuadoresGrid;
