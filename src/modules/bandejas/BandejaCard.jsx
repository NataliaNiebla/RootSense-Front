import React, { useState } from 'react';
import '../../styles/bandejas/BandejaCardStyles.css'
import { ThunderboltFilled } from '@ant-design/icons';

const BandejaCard = ({ bandeja }) => {
    const [showSensors, setShowSensors] = useState(false);

    const toggleSensors = () => {
        setShowSensors(!showSensors);
    };

    const getStatusColor = (estado) => {
        switch (estado) {
            case 'activo':
                return 'status-active';
            case 'inactivo':
                return 'status-inactive';
            case 'mantenimiento':
                return 'status-maintenance';
            default:
                return 'status-inactive';
        }
    };

    return (
        <div className="bandeja-card">
            <div className="bandeja-header">
                <h3 className="bandeja-title">{bandeja.nombre}</h3>
                <p className="bandeja-location">{bandeja.ubicacion}</p>
            </div>

            <div className="bandeja-content">
                <div className="bandeja-info">
                    <div className="info-row">
                        <span className="info-label">Tipo de semilla:</span>
                        <span className="info-value">{bandeja.tipoSemilla}</span>
                    </div>
                    <div className="info-row">
                        <span className="info-label">Fecha de inicio:</span>
                        <span className="info-value">{new Date(bandeja.fechaInicio).toLocaleDateString('es-ES')}</span>
                    </div>
                </div>

                <div className="bandeja-actions">
                    <button className="btn-sensors" onClick={toggleSensors}>
                        <ThunderboltFilled className="icon" />
                        {showSensors ? 'Ocultar Sensores' : 'Ver Sensores'}
                    </button>
                </div>
            </div>

            {showSensors && (
                <div className="sensors-panel active">
                    <h4 className="sensors-title">Sensores Asociados</h4>
                    <div className="sensors-list">
                        {bandeja.sensores && bandeja.sensores.length > 0 ? (
                            bandeja.sensores.map((sensor, index) => (
                                <div className="sensor-item" key={index}>
                                    <div className="sensor-id">{sensor.id}</div>
                                    <div className="sensor-type">{sensor.tipo}</div>
                                    <span className={`sensor-status ${getStatusColor(sensor.estado)}`}>
                                        {sensor.estado.charAt(0) + sensor.estado.slice(1)}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p className="no-sensors">No hay sensores asociados</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BandejaCard;
