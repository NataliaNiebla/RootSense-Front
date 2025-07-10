import React from 'react';
import '../../../styles/sensores/SensorCard.css';

const SensorCard = ({ sensor, onToggleEstado, obtenerIconoSensor, obtenerNombreTipo }) => {
    return (
        <div className="sensor-card">
            <div className="sensor-header">
                <h4 className="sensor-title">
                    {obtenerIconoSensor(sensor.tipo)}
                    {obtenerNombreTipo(sensor.tipo)}
                </h4>
                <span className="sensor-id">ID: {sensor.id}</span>
            </div>
            
            <div className="sensor-content">
                <div className="sensor-item">
                    <span className="sensor-label">Bandeja:</span>
                    <span className="sensor-value">{sensor.ubicacion}</span>
                </div>
                <div className="sensor-item">
                    <span className="sensor-label">Estado:</span>
                    <span className="sensor-value">
                        {sensor.estado.charAt(0).toUpperCase() + sensor.estado.slice(1)}
                    </span>
                </div>
            </div>
            
            <button 
                className={`btn btn-toggle ${sensor.estado === 'activo' ? 'active' : 'inactive'}`}
                onClick={() => onToggleEstado(sensor.id)}
            >
                {sensor.estado === 'activo' ? 'Desactivar' : 'Activar'}
            </button>
        </div>
    );
};

export default SensorCard;
